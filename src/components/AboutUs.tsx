import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const AboutUs = () => {
  const location = useLocation();
  const { aboutUsData } = useSelector((state: any) => state.aboutUs);
  const { t, i18n } = useTranslation("global");

  return (
    <div className='container px-4 py-20 md:py-30 mx-auto max-w-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
        <div className='lg:col-span-8'>
          <img src={aboutUsData? aboutUsData.img : ""} alt="Business Image" className='rounded-lg w-full' />
        </div>
        {aboutUsData && (
          <div className='lg:col-span-4'>
            <h2 className='text-gray-700 text-xl font-semibold mb-4'>{t('home.aboutUs.title')}</h2>
            <div className='w-16 h-[2px] bg-yellow-600 mb-6'></div>
            <h1 className='text-xl md:text-3xl font-bold mb-6'>{aboutUsData.title[i18n.language]}</h1>
            <p className='text-lg md:text-xl leading-7 text-gray-600 mb-8'>{aboutUsData.subtitle[i18n.language]}</p>
            {location.pathname !== '/about-us' && (
              <Link to="/about-us" className='text-yellow-600 font-semibold hover:underline text-lg'>
                {t('home.aboutUs.linkText')}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
