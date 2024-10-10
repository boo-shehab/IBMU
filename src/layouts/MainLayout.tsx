import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MainLayout = () => {

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
