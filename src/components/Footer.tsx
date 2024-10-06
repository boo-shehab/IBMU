import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid layout for large screens, stacking on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="flex flex-col items-start">
            <img src={logo} className="w-24 h-24 mb-4" alt="Logo" />
            <p className="text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-400">{t('footer.home')}</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">{t('footer.about')}</Link></li>
              <li><Link to="/members" className="hover:text-yellow-400">{t('footer.members')}</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-400">{t('footer.blog')}</Link></li>
              <li><Link to="/news" className="hover:text-yellow-400">{t('footer.news_events')}</Link></li>
              <li><Link to="/contact-us" className="hover:text-yellow-400">{t('footer.contact_us')}</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-4">{t('footer.contact_us')}</h3>
            <p className="mb-2">
              <a href="mailto:info@ifb-us.org" className="hover:text-yellow-400">
                info@ifb-us.org
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+9647809141940" className="hover:text-yellow-400">
                07809141940
              </a>
            </p>
            <p className='mb-2'>
                <a href='https://maps.app.goo.gl/yn5oAhWsK73XPtjL8' className="hover:text-yellow-400">
                    {t('footer.address')}
                </a>
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="text-white hover:text-yellow-400">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.988h-2.54v-2.89h2.54V9.798c0-2.507 1.493-3.89 3.773-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.262c-1.243 0-1.632.774-1.632 1.567v1.88h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-yellow-400">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.84 3.657 8.84 8.437 9.68v-6.84h-2.54v-2.84h2.54V9.8c0-2.5 1.493-3.78 3.773-3.78 1.093 0 2.24.195 2.24.195v2.5h-1.262c-1.243 0-1.632.78-1.632 1.567v1.88h2.773l-.443 2.84h-2.33v6.8C18.343 20.84 22 16.84 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm">
          <p>&copy; 2024 {t('footer.copyright')} - {t('footer.rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
