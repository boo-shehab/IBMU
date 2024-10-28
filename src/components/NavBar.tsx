import { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import IQFlag from '../assets/images/Flag_of_Iraq.svg.png'
import UKFlag from '../assets/images/Flag_of_UK.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { FaPhone } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { headquarterData } = useSelector((state: any) => state.headquarter);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    localStorage.setItem('language', lng)
    i18n.changeLanguage(lng);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const toggleDropdown = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent navigation
    setDropdownOpen(!dropdownOpen);
  };

  const isNewsEventsActive = location.pathname.startsWith('/news-events');

  return (
    <header className="relative text-white">
      <div className="bg-black">
        <div className='container mx-auto px-4 py-2 max-w-screen'>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button onClick={() => changeLanguage('en')} className="text-white mx-1"><img src={UKFlag} alt="" className='w-8'/></button>
              <button onClick={() => changeLanguage('ar')} className='text-white mx-1'><img src={IQFlag} alt="" className='w-8'/></button>
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

      <div className="md:hidden absolute z-40 w-full flex justify-between py-1 px-4" style={{backgroundColor: "#00000075"}}>
        <button onClick={toggleMenu} className="text-black">
          <HiBars3 className='text-3xl sm:text-5xl text-white' />
        </button>
        <Link to="/" className='px-4'><img src={logo} className='w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl' alt="" /></Link>
      </div>

      {!isOpen && (
        <nav className="hidden md:block absolute z-40 w-full py-3" style={{backgroundColor: "#00000075"}}>
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
                onClick={toggleDropdown}
                className={isNewsEventsActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-white hover:text-yellow-400 pb-1'}
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
                          {t('common.events')}
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
    </header>
  );
};

export default NavBar;
