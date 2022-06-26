import qs from 'qs';
import { defineComponent, onMounted } from '@vue/composition-api';
import { createNamespacedHelpers, useState, useMutations } from 'vuex-composition-helpers/dist';
import Cookies from 'js-cookie';
import useI18n from '@/utils/useI18n';

const { useMutations: useAccountMutations } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'AuthProvider',
  setup(props, { root }) {
    const i18n = useI18n();
    const { afterLogin } = useState(['afterLogin']);
    const { setAfterLogin } = useMutations(['setAfterLogin']);
    const { setDracoAccessToken, setDracoWalletAddress, setCommonModal } = useMutations([
      'setDracoAccessToken',
      'setDracoWalletAddress',
      'setCommonModal',
    ]);
    const { setRepresent } = useAccountMutations(['setRepresent']);

    const { provider } = root.$route.params;
    const query = qs.parse(root.$route.query);

    const showErrorPopup = (title, desc) => {
      setCommonModal({
        open: true,
        title,
        desc,
        primary: 'OK',
        onPrimary() {
          root.$router.replace('/');
        },
        onClose() {
          root.$router.replace('/');
        },
      });
    };

    onMounted(() => {
      if (provider === 'apple') {
        if (query.code !== '200') {
          if (query.code === '60503') {
            showErrorPopup('Login Failed', i18n.t('s.account.message.error.60503'));
          } else {
            showErrorPopup('Login Failed', `Login Failed. (${query.code})`);
          }
        }

        if (query.code === '200') {
          const data = JSON.parse(query.data);
          setDracoAccessToken(data.accessToken);
          if (data.walletAddress) {
            setDracoWalletAddress(data.walletAddress);
          }
          if (data.representCharacter) {
            setRepresent(data.representCharacter);
          }

          // window.location.assign(window.location.origin);
          const prevPath = Cookies.get('xdraco-prev-path');
          if (prevPath) {
            Cookies.remove('xdraco-prev-path');
            setAfterLogin(true);
            root.$router.replace(prevPath);
          } else {
            root.$router.replace('/');
          }
        }

        return;
      }

      if (query.code) {
        const params = { code: query.code, redirectUri: `${process.env.VUE_APP_DRACO_REDIRECT_URI}/${provider}` };

        if (provider === 'facebook') {
          params.state = query.state;
        }

        root.$dracoWebApi
          .get(`/login/${provider}`, {
            params,
            withCredentials: true,
          })
          .then(({ data }) => {
            console.log(data);
            if (data.code !== 200) {
              if (data.code === 60503) {
                showErrorPopup('Login Failed', i18n.t('s.account.message.error.60503'));
                return;
              }
              showErrorPopup('Login Failed', `${i18n.t('s.account.message.error.common')} (${data.code})`);
            } else {
              setDracoAccessToken(data.data.accessToken);
              if (data.data.walletAddress) {
                setDracoWalletAddress(data.data.walletAddress);
              }
              if (data.data.representCharacter) {
                setRepresent(data.data.representCharacter);
              }

              const prevPath = Cookies.get('xdraco-prev-path');
              if (prevPath) {
                Cookies.remove('xdraco-prev-path');
                setAfterLogin(true);
                root.$router.replace({ path: prevPath });
              } else {
                root.$router.replace('/');
              }
            }
            // window.location.assign(window.location.origin);
            // root.$router.replace('/rounds');
          })
          .catch((e) => {
            console.log(e);
            showErrorPopup('Login Failed', i18n.t('s.account.message.error.common'));
          });
      }
    });
  },
});
