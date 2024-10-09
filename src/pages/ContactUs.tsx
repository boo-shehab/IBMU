import React from 'react'
import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact';
import GoogleMap from '../components/GoogleMap';

const ContactUs = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <div className="w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto">
        <div className="relative img-slider-img">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png"
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute w-full top-1/2 text-white transform -translate-y-1/2">
            <div className="container mx-auto px-4 max-w-screen">
              <p className="image-description text-gray-300 text-4xl md:text-5xl lg:text-6xl py-2">{t('ContactUs.title')}</p>
              <h1 className="image-title text-4xl md:text-5xl lg:text-6xl py-4">{t('ContactUs.content')}</h1>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <GoogleMap />
    </>
  )
}

export default ContactUs