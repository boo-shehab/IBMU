import React from 'react';
import { images } from '../assets/images/image-data';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation("global");
  return (
    <div className='container px-4 py-40 mx-auto max-w-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
        <div className='lg:col-span-5'>
          <img src={images[0].url} alt="Business Image" className='rounded-lg shadow-lg w-full' />
        </div>

        <div className='lg:col-span-7'>
          <h2 className='text-gray-700 text-xl font-semibold mb-4'>{t('home.aboutUs.title')}</h2>
          <div className='w-16 h-[2px] bg-yellow-600 mb-6'></div>
          <h1 className='text-3xl font-bold mb-6'>{t('home.aboutUs.subtitle')}</h1>
          <p className='text-lg leading-7 text-gray-600 mb-8'>{t('home.aboutUs.description')}</p>
          <Link to="/" className='text-yellow-600 font-semibold hover:underline'>
            {t('home.aboutUs.linkText')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
