import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation("global")

  // التحكم في حالة القائمة الجانبية
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // تغيير اللغة
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <header className="relative">
      <div className="bg-black">
        <div className='container mx-auto px-4 py-6'>
          <div className="flex justify-between items-center">
            {/* الأزرار */}
            <div className="flex items-center">
              <button onClick={() => changeLanguage('en')} className="text-white mx-1">EN</button>
              <button onClick={() => changeLanguage('ar')} className='text-white mx-1'>AR</button>
            </div>
            <div className="flex items-center mx-1">
              <a href="#" className="text-white mx-1">info@ifb-us.org</a>
              <a href="#" className='text-white mx-1' dir={i18n.language == 'ar' && 'ltr'}>
                <span>
                +
                </span>
                <span>
                9647508032510
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* زر البرجر */}
      <div className="md:hidden flex justify-between p-4">
        <button onClick={toggleMenu} className="text-black">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <Link to="/"><img src={logo} className='w-24 h-24' alt="" /></Link>
      </div>

      {/* إخفاء قائمة التنقل الرئيسية إذا كانت القائمة الجانبية مفتوحة */}
      {!isOpen && (
        <nav className="hidden md:block mt-6 w-100">
          <ul className="flex justify-center items-center space-x-4 text-lg">
            <li><Link to="/" className="hover:text-yellow-400">الصفحة الرئيسية</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">عن الاتحاد</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">قسم الاعضاء</Link></li>
            <li><Link to="/"><img src={logo} className='w-24 h-24' alt="" /></Link></li>
            <li><Link to="/" className="hover:text-yellow-400">مدونة أو مقالات</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">اخبار و فعاليات</Link></li>
            <li><Link to="/contact-us" className="hover:text-yellow-400">اتصل بنا</Link></li>
          </ul>
        </nav>
      )}

      {/* الخلفية الداكنة */}
      <div 
        className={`fixed top-0 left-0 w-full h-full z-10 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMenu}
      >
      </div>

      {/* القائمة الجانبية */}
      <div className={`fixed top-0 ${i18n.language === 'ar' ? 'right-0' : 'left-0'} w-64 bg-gray-800 h-full z-40 transform ${isOpen ? 'translate-x-0' : i18n.language === 'ar' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'} transition-all duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-start p-4 space-y-4 text-lg text-white">
          <li><Link to="/"><img src={logo} className='w-24 h-24' alt="Logo" /></Link></li>
          <li><Link to="/" onClick={toggleMenu} className="hover:text-yellow-400">الصفحة الرئيسية</Link></li>
          <li><Link to="/" onClick={toggleMenu} className="hover:text-yellow-400">عن الاتحاد</Link></li>
          <li><Link to="/" onClick={toggleMenu} className="hover:text-yellow-400">قسم الاعضاء</Link></li>
          <li><Link to="/" onClick={toggleMenu} className="hover:text-yellow-400">مدونة أو مقالات</Link></li>
          <li><Link to="/" onClick={toggleMenu} className="hover:text-yellow-400">اخبار و فعاليات</Link></li>
          <li><Link to="/contact-us" onClick={toggleMenu} className="hover:text-yellow-400">اتصل بنا</Link></li>
        </ul>
      </div>
    </header>
    </>
  );
};

export default NavBar;
