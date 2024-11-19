import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact';
import contactImage from '../assets/images/contact.jpg'
import GoogleMap from '../components/GoogleMap';

const ContactUs = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <div className="w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto">
        <div className="relative img-slider-img">
          <img
            src={contactImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full top-1/2 text-white transform -translate-y-1/2">
            <div className="container mx-auto px-4 max-w-screen">
              <p className="image-description text-gray-300 text-xl sm:text-3xl md:text-5xl lg:text-6xl py-2 w-fit bg-[#00000095]">{t('ContactUs.title')}</p>
              <h1 className="image-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4 w-fit bg-[#00000095]">{t('ContactUs.content')}</h1>
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
