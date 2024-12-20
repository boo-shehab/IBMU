import { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { FaPhone, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { headquarterData } = useSelector((state: any) => state.headquarter);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(false)
  }
  
  const changeLanguage = (lng: string) => {
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
  };

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);
  const toggleDropdown = (event: React.MouseEvent) => {
    event.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const isNewsEventsActive = location.pathname.startsWith('/news-events');

  return (
    <header className="relative text-white">
      <div className="bg-black">
        <div className='container mx-auto px-4 py-2 max-w-screen'>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center">
              <button onClick={() => changeLanguage('en')} className={`mx-1 text-lg ${i18n.language === 'en'? 'text-yellow-400': 'text-white'}`}>English</button>
              <button onClick={() => changeLanguage('ar')} className={`mx-1 text-lg ${i18n.language === 'ar'? 'text-yellow-400': 'text-white'}`}>عربي</button>
            </div>
            <div className="flex items-center mx-1 gap-1 md:gap-3">
              {headquarterData && Object.keys(headquarterData).length > 0 && (
                <>
                  <a href={`mailto:${headquarterData.email}`} className="text-white mx-1 hover:text-yellow-400 flex items-center gap-1 text-xs sm:text-lg"><MdOutlineMail className='h-full text-yellow-400' />{headquarterData.email}</a>
                  <a href={`tel:${headquarterData.phone}`} className='text-white mx-1 hover:text-yellow-400 flex items-center gap-1 text-xs sm:text-lg'><FaPhone className='h-full text-yellow-400' /><p style={{direction: "ltr"}}>{headquarterData.phone}</p></a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-40 w-full flex justify-between py-1 px-4 border-t-4 border-gray-600" style={{backgroundColor: "#000000"}}>
        <button onClick={toggleMenu} className="text-white">
          <HiBars3 className='text-3xl sm:text-5xl text-white' />
        </button>
        <Link to="/" className='px-4'><img src={logo} className='w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl' alt="" /></Link>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-30"
              onClick={toggleMenu}
            />

            <motion.aside
              initial={{ x: i18n.language === 'ar'? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: i18n.language === 'ar'? '100%' : '-100%' }}
              transition={{ duration: 0.3 }}
              className={`fixed md:hidden top-0 ${i18n.language === 'ar'? 'right-0' : 'left-0' } z-40 w-3/4 sm:w-1/2 md:w-1/3 h-full text-white bg-black p-6 shadow-lg`}
            >
              <div className="flex justify-between items-center">
                <Link to="/" onClick={toggleMenu}>
                  <img src={logo} className="w-24 h-24 rounded-2xl" alt="Logo" />
                </Link>
                <button onClick={toggleMenu} className="text-2xl text-white">
                  <FaTimes />
                </button>
              </div>
              <ul className="mt-8 space-y-4">
                <li>
                  <NavLink to="/" onClick={toggleMenu} className="block text-lg text-white hover:text-yellow-400">
                    {t('common.home')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" onClick={toggleMenu} className="block text-lg text-white hover:text-yellow-400">
                    {t('common.about')}
                  </NavLink>
                </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
            <NavLink to="/news-events/news" onClick={toggleDropdown} className={isNewsEventsActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-400 pb-1'}>
              {t('common.news_events')}
            </NavLink>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className={`absolute ${i18n.language === 'ar'? 'right-0' : 'left-0' } mt-2 bg-white text-black p-4 shadow-xl rounded-lg`} style={{ width: "max-content" }}>
                  <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white" />
                  <ul>
                    <li><NavLink to="/news-events/news" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-200">{t('common.news')}</NavLink></li>
                    <li><NavLink to="/news-events/events" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-200">{t('common.events')}</NavLink></li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
                <li>
                  <NavLink to="/contact-us" onClick={toggleMenu} className="block text-lg text-white hover:text-yellow-400">
                    {t('common.contact_us')}
                  </NavLink>
                </li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <nav className={`hidden md:block z-40 w-full py-3 border-t-4 border-gray-600 ${isOpen ? 'hidden' : ''}`} style={{backgroundColor: "#000000"}}>
        <ul className="container mx-auto px-4 py-2 max-w-screen flex justify-between items-center gap-4 text-lg">
          <li>
            <Link to="/"><img src={logo} className='w-28 h-28 rounded-2xl' alt="Logo" /></Link>
          </li>
          <div className='flex justify-center items-center gap-4'>

            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-400 pb-1'}>
                {t('common.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={({ isActive }) => isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-400 pb-1'}>
                {t('common.about')}
              </NavLink>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
              <NavLink to="/news-events/news" onClick={toggleDropdown} className={isNewsEventsActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-400 pb-1'}>
                {t('common.news_events')}
              </NavLink>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className={`absolute ${i18n.language === 'ar'? 'right-0' : 'left-0' } mt-2 bg-white text-black p-4 shadow-xl rounded-lg z-20`} style={{ width: "max-content" }}>
                    <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white" />
                    <ul>
                      <li><NavLink to="/news-events/news" className="block px-4 py-2 hover:bg-gray-200">{t('common.news')}</NavLink></li>
                      <li><NavLink to="/news-events/events" className="block px-4 py-2 hover:bg-gray-200">{t('common.events')}</NavLink></li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-400 pb-1'}>
                {t('common.contact_us')}
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
