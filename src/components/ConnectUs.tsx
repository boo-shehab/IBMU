import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const ConnectUs = () => {
  const { t } = useTranslation("global");
  
  return (
    <div className='bg-gray-800 py-10'>
      <div className='container mx-auto px-4 flex justify-between items-center max-w-screen'>
        <div className='text-white'>
          <h1 className='text-4xl mb-7'>{t('home.connectUs.title')}</h1>
          <p>{t('home.connectUs.description')}</p>
        </div>
        <NavLink to="/contact-us" className='bg-yellow-400 hover:bg-yellow-500 py-5 px-10 rounded-sm text-lg'>
          {t('home.connectUs.buttonText')}
        </NavLink>
      </div>
    </div>
  );
}

export default ConnectUs;
