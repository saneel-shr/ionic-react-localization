import i18n, { i18n as i18nType } from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from "./translation.json";
import { Preferences } from "@capacitor/preferences";

const initI18n = async ({ language = 'en', userCustomTranslations = {} } = {}): Promise<i18nType> => {
  const { value: savedLanguage } = await Preferences.get({ key: 'language' });
  const lng = savedLanguage || language;
  const resources = {
    ...translations,
    ...userCustomTranslations
  };
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      }
    });

  return i18n;
};

export { initI18n };
export default i18n ;