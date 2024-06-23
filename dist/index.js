"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initI18n = void 0;
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const translation_json_1 = __importDefault(require("./translation.json"));
const preferences_1 = require("@capacitor/preferences");
const initI18n = async ({ language = 'en', userCustomTranslations = {} } = {}) => {
    const { value: savedLanguage } = await preferences_1.Preferences.get({ key: 'language' });
    const lng = savedLanguage || language;
    const resources = {
        ...translation_json_1.default,
        ...userCustomTranslations
    };
    await i18next_1.default
        .use(react_i18next_1.initReactI18next)
        .init({
        resources,
        lng,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });
    return i18next_1.default;
};
exports.initI18n = initI18n;
exports.default = i18next_1.default;
