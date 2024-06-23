# ionic-react-localization
Implementation for managing localization in Ionic React applications using Capacitor Preferences.

To install the package, use the following command:

```sh
npm install ionic-react-localization
```

## Usage Guide
## Step 1: Create a translations.json file in your project root directory with translations in the following format:
```
{
  "en": {
    "translation": {
      "language": "LANGUAGE"
    }
  },
  "ja": {
    "translation": {
      "language": "言語"
    }
  },
  "ne": {
    "translation": {
      "language": "भाषा"
    }
  }
}
```
This file contains translations for different languages. Each language should have a "translation" object with keys corresponding to the translations.

## Step 2: Import in main.tsx file

In your main.tsx, import necessary modules:
```
import { I18nextProvider } from 'react-i18next'
import { initI18n } from "ionic-react-localization";
import translations from '../translation.json';
```

## Step 3: Initialize i18n and render application
Initialize i18n before rendering your application and wrap your app in I18nextProvider:
```
initI18n({ userCustomTranslations: translations }).then((i18n) => {
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
});
```

## Example Project
An example project demonstrating the usage of this package can be found in the examples/sample directory of this repository. The example includes:

Clone the repository and run below commands:
```
cd examples/sample
ionic serve
``````

## Language code:
```
af: Afrikaans
am: Amharic
ar: Arabic
az: Azerbaijani
be: Belarusian
bg: Bulgarian
bn: Bengali
bs: Bosnian
ca: Catalan
chr: Cherokee
cs: Czech
cy: Welsh
da: Danish
de: German
dv: Divehi
el: Greek
en: English
eo: Esperanto
es: Spanish
et: Estonian
eu: Basque
fa: Persian
fi: Finnish
fil: Filipino
fo: Faroese
fr: French
ga: Irish
gd: Scottish Gaelic
gl: Galician
gn: Guarani
gu: Gujarati
he: Hebrew
hi: Hindi
hr: Croatian
ht: Haitian Creole
hu: Hungarian
hy: Armenian
id: Indonesian
is: Icelandic
it: Italian
iu: Inuktitut
ja: Japanese
ka: Georgian
kk: Kazakh
km: Khmer
kn: Kannada
ko: Korean
kok: Konkani
ku: Kurdish
ky: Kyrgyz
lb: Luxembourgish
lo: Lao
lt: Lithuanian
lv: Latvian
mi: Maori
mk: Macedonian
ml: Malayalam
mn: Mongolian
mr: Marathi
ms: Malay
mt: Maltese
my: Burmese
nb: Norwegian Bokmål
ne: Nepali
nl: Dutch
nn: Norwegian Nynorsk
no: Norwegian
oc: Occitan
or: Oriya
pa: Punjabi
pl: Polish
ps: Pashto
pt: Portuguese
qu: Quechua
rm: Romansh
ro: Romanian
ru: Russian
sa: Sanskrit
se: Northern Sami
si: Sinhala
sk: Slovak
sl: Slovenian
sq: Albanian
sr: Serbian
sv: Swedish
sw: Swahili
ta: Tamil
te: Telugu
th: Thai
tk: Turkmen
tr: Turkish
tt: Tatar
ug: Uyghur
uk: Ukrainian
ur: Urdu
uz: Uzbek
vi: Vietnamese
wo: Wolof
yo: Yoruba
zh: Chinese
zu: Zulu
```