import React from 'react';
import { useTranslation } from 'react-i18next';

const ConnectUs = () => {
  const { t } = useTranslation("global");
  return (
    <div className='bg-gray-800 py-10'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <div className='text-white'>
          <h1 className='text-4xl mb-7'>{t('home.connectUs.title')}</h1>
          <p>{t('home.connectUs.description')}</p>
        </div>
        <button className='bg-yellow-400 hover:bg-yellow-500 py-5 px-10 rounded-sm text-lg'>
          {t('home.connectUs.buttonText')}
        </button>
      </div>
    </div>
  );
}

export default ConnectUs;
