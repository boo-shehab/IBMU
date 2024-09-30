import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import global_en from './translations/en.json';
import global_ar from './translations/ar.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'ar',
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </StrictMode>,
)
