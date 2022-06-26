import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { useDay } from '@/composables/round';
import i18n from '@/locales/i18n';
import 'dayjs/locale/en';
import 'dayjs/locale/zh';
import 'dayjs/locale/ja';
import 'dayjs/locale/th';
import 'dayjs/locale/id';
import 'dayjs/locale/vi';
import 'dayjs/locale/de';
import 'dayjs/locale/es';
import 'dayjs/locale/pt';
import 'dayjs/locale/ru';

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

// eslint-disable-next-line no-unused-vars
export const dfFromTimestamp = (timestamp, format, decorator) => {
  const day = dayjs.unix(timestamp).utcOffset(8, false).format(format);
  return decorator ? i18n.t(decorator, [day]) : day;
};

export const dateFormat = (v, _locale, _template = 'lll') => {
  const locale = _locale || i18n.locale;
  const day = v ? dayjs.unix(v) : dayjs();
  return day.locale(locale.startsWith('zh') ? 'zh' : locale).format(_template);
};

export const dateFormatFromString = (v, _timezone = '+00:00', _locale, _template = 'lll') => {
  const locale = _locale || i18n.locale;
  const day = v ? dayjs(`${v} ${_timezone}`, 'YYYY-MM-DD HH:mm:ss Z') : dayjs();

  return day.locale(locale.startsWith('zh') ? 'zh' : locale).format(_template);
};

export const fromNow = (v, l) => {
  const locale = l || i18n.locale;
  const day = useDay(v);
  const now = useDay();
  return now.diff(day, 's') < 60 * 60 * 24 ? day.fromNow(false) : dateFormat(v, locale);
};

export const isNew = (v) => {
  const day = useDay(v);
  const now = useDay();
  return now.diff(day, 'h') < 24;
};
