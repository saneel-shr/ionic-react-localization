import React from 'react';
import { IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { Preferences } from '@capacitor/preferences';
import i18n from "ionic-react-localization";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { t } = useTranslation();

  const handleLanguageChange = async (language: string) => {
    await Preferences.set({ key: 'language', value: language });
    i18n.changeLanguage(language);
  };

  return (
    <IonList>
      <IonItem>
        <IonLabel>{t('language')}</IonLabel>
        <IonSelect value={i18n.language} onIonChange={e => handleLanguageChange(e.detail.value)}>
          <IonSelectOption value="en">English</IonSelectOption>
          <IonSelectOption value="ja">Japanese</IonSelectOption>
          <IonSelectOption value="ne">Nepali</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
};

export default LanguageSelector;