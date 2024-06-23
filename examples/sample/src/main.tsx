import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next'
import { initI18n } from "ionic-react-localization";
import translations from '../translation.json';

const container = document.getElementById('root');
const root = createRoot(container!);
initI18n({ userCustomTranslations: translations }).then((i18n) => {
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
});