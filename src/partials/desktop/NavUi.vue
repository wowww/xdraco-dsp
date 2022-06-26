<template>
  <v-menu content-class="nav-ui" max-height="700" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item active="false" v-for="(item, i) in items" :key="i" :to="item.path">
          <span class="text">{{ item.name }}</span>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import uiRoutes from '@/routes/uiRoutes';

export default {
  data: () => ({
    selectedItem: 0, // 선택된 항목

    items: [
      ...uiRoutes,
      // {
      //   path: '/ui-popup-dsp',
      //   name: 'PopupDsp',
      // },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.nav-ui {
  .v-list-item {
    min-height: 36px;
  }
}
</style>
