import AboutUs from '../components/AboutUs';
import TabSection from '../components/TabSection';
import Achievements from '../components/Achievements';
import { useTranslation } from 'react-i18next';
import landingImage from '../assets/images/about-us.jpg'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AboutUsPage = () => {
  const { t } = useTranslation("global");
  const { aboutUsData } = useSelector((state: any) => state.aboutUs);

  useEffect(() => {
    if (aboutUsData) {
      window.scrollTo(0, 0);
    }
  }, [aboutUsData]);

  return (
    <>
      <div className="w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto">
        <div className="relative img-slider-img">
          <img
            src={landingImage}
            alt=""
            className="w-full h-full"
          />
          <div className="absolute w-full top-1/2 text-white transform -translate-y-1/2">
            <div className="container mx-auto px-4 max-w-screen">
              <p className="image-description text-gray-300 text-xl sm:text-2xl md:text-5xl lg:text-6xl py-2 w-fit bg-[#00000095]">{t('about.title')}</p>
              <h1 className="image-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4 w-fit bg-[#00000095]">{t('about.content')}</h1>
            </div>
          </div>
        </div>
      </div>
      {aboutUsData && (
        <>
          <AboutUs />
          <Achievements />
          <TabSection />
        </>
      )}
    </>
  );
};

export default AboutUsPage;
