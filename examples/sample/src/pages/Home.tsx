import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LanguageSelector from '../components/LanguageSelector';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Language selector</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Language Selector</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LanguageSelector />
      </IonContent>
    </IonPage>
  );
};

export default Home;