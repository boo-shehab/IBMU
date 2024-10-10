import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import global_en from './translations/en.json';
import global_ar from './translations/ar.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'ar';
i18next.init({
  interpolation: { escapeValue: false },
  lng: savedLanguage, 
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    }
  }
})

const changeDocumentDirection = (lang: string) => {
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
};

const RootComponent = () => {
  useEffect(() => {
    changeDocumentDirection(i18next.language);
    
    i18next.on('languageChanged', (lng) => {
      changeDocumentDirection(lng);
    });
  }, []);

  return (
    // <StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    // </StrictMode>
  );
};

// إنشاء التطبيق
createRoot(document.getElementById('root')!).render(<RootComponent />);
