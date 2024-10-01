import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import global_en from './translations/en.json';
import global_ar from './translations/ar.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

// تهيئة i18next
i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ar',  // اللغة الافتراضية
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    }
  }
})

// تغيير اتجاه الصفحة بناءً على اللغة
const changeDocumentDirection = (lang: string) => {
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
};

// تحديث اتجاه الصفحة عند بدء التطبيق
const RootComponent = () => {
  useEffect(() => {
    changeDocumentDirection(i18next.language);
    
    // الاستماع لتغييرات اللغة
    i18next.on('languageChanged', (lng) => {
      changeDocumentDirection(lng);
    });
  }, []);

  return (
    <StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </StrictMode>
  );
};

// إنشاء التطبيق
createRoot(document.getElementById('root')!).render(<RootComponent />);
