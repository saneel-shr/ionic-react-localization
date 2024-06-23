import i18n, { i18n as i18nType } from 'i18next';
declare const initI18n: ({ language, userCustomTranslations }?: {
    language?: string | undefined;
    userCustomTranslations?: {} | undefined;
}) => Promise<i18nType>;
export { initI18n };
export default i18n;
