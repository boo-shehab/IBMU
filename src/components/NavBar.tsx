import React, { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiBars3 } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="relative text-white">
      <div className="bg-black">
        <div className='container mx-auto px-4 py-2 max-w-screen'>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button onClick={() => changeLanguage('en')} className="text-white mx-1">{t('nav.language_switch.en')}</button>
              <button onClick={() => changeLanguage('ar')} className='text-white mx-1'>{t('nav.language_switch.ar')}</button>
            </div>
            <div className="flex items-center mx-1">
              <a href={`mailto:${t('nav.info')}`} className="text-white mx-1">{t('nav.info')}</a>
              <a href={`tel:${t('nav.phone')}`} className='text-white mx-1'>{t('nav.phone')}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden absolute z-40 w-full flex justify-between py-1 px-4">
        <button onClick={toggleMenu} className="text-black">
          <HiBars3 className='text-5xl text-white' />
        </button>
        <Link to="/" className='px-4'><img src={logo} className='w-16 h-16 rounded-2xl' alt="" /></Link>
      </div>

      {!isOpen && (
        <nav className="hidden md:block absolute z-40 w-full my-3">
          <ul className="flex justify-center items-center gap-4 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => 
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                    : 'text-white hover:text-yellow-400 pb-1'
                }
              >
                {t('common.home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => 
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                    : 'text-white hover:text-yellow-400 pb-1'
                }
              >
                {t('common.about')}
              </NavLink>
            </li>
            <li>
              <Link to="/">
                <img src={logo} className='w-24 h-24 rounded-2xl' alt="" />
              </Link>
            </li>
            <li 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <NavLink
                to="/news-events/news"
                style={{position: 'relative'}}
                className={({ isActive }) =>
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                    : 'text-white hover:text-yellow-400 pb-1'
                }
              >
                {t('common.news_events')}
              </NavLink>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 mt-2 bg-white text-black p-4 shadow-xl rounded-lg"
                    style={{ width: "max-content" }} 
                  >
                    <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white" />
                    <ul>
                      <li>
                        <NavLink to="/news-events/news" className="block px-4 py-2 hover:bg-gray-200">
                          {t('common.news')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/news-events/events" className="block px-4 py-2 hover:bg-gray-200">
                          {t('common.activities')}
                        </NavLink>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => 
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                    : 'text-white hover:text-yellow-400 pb-1'
                }
              >
                {t('common.contact_us')}
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      <div 
        className={`fixed top-0 left-0 w-full h-full z-10 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMenu}
      ></div>

      <div className={`fixed top-0 ${i18n.language === 'ar' ? 'right-0' : 'left-0'} w-64 bg-gray-800 h-full z-40 transform ${isOpen ? 'translate-x-0' : i18n.language === 'ar' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'} transition-all duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col mx-4 space-y-4 mt-10">
          <li>
            <Link to="/">
              <img src={logo} className='w-20 h-20 rounded-2xl mx-auto mb-5' alt="" />
            </Link>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => 
                isActive 
                  ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                  : 'text-white hover:text-yellow-400 pb-1'
              }
            >
              {t('common.home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => 
                isActive 
                  ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                  : 'text-white hover:text-yellow-400 pb-1'
              }
            >
              {t('common.about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) => 
                isActive 
                  ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                  : 'text-white hover:text-yellow-400 pb-1'
              }
            >
              {t('common.news_events')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => 
                isActive 
                  ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' 
                  : 'text-white hover:text-yellow-400 pb-1'
              }
            >
              {t('common.contact_us')}
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
