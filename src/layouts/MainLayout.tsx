import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Headquarter } from '../redux/data/Headquarter';
import { AboutUs } from '../redux/data/aboutUs.ts'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { OrbitProgress } from "react-loading-indicators";


const MainLayout: React.FC = () => {
  const dispatch = useDispatch();

  const { headquarterData, loading: headquarterLoading, error: headquarterError } = useSelector((state: any) => state.headquarter);
  const { loading: aboutUsLoading, error: aboutUSError } = useSelector((state: any) => state.aboutUs);

  const loading = headquarterLoading || aboutUsLoading;
  const error = headquarterError || aboutUSError;
  
  useEffect(() => {
    dispatch<any>(Headquarter());
    dispatch<any>(AboutUs());
  }, [dispatch]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      {loading && (
        <div className='h-screen w-screen flex justify-center items-center'>
          <OrbitProgress variant="dotted" color="#32cd32" size="large" text="" textColor="#520d0d" />
        </div>
      )}
      {error && <p>Error: {error}</p>}
      {!loading && !error && headquarterData && (
        <div>
          <ScrollToTop />
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
