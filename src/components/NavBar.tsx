import React from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <header className="">
      <div className="bg-black">
        <div className='container mx-auto px-4 py-6'>
          <div className="flex justify-between items-center">
            {/* الأزرار */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white">EN</a>
              <a href="#" className='text-white'>AR</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white">info@ifb-us.org</a>
              <a href="#" className='text-white'>+9647508032510</a>
              <div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
        {/* قائمة التنقل */}
        <nav className="mt-6 w-100">
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
    </header>
    </>
  )
}

export default NavBar
