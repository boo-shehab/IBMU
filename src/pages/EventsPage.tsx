import { useEffect, useState } from 'react'
import Event from '../components/Event';
import { useTranslation } from 'react-i18next';
import loadingImage from '../assets/images/news.webp'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ActivitiesPage = () => {

  const { t } = useTranslation("global");
  const [events, setEvents] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(posts);
        
      } catch (error) {
        console.error("Error fetching news posts: ", error);
      }
    };

    fetchNewsPosts();
  }, []);
  return (
    <div className='bg-gray-100'>
      <div className="w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/5] mx-auto bg-gray-100">
        <div className="relative img-slider-img">
          <img
            src={loadingImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full top-1/2 text-white transform -translate-y-1/2">
            <div className="container mx-auto px-4 max-w-screen">
              <p className="image-description text-gray-300 text-xl sm:text-3xl md:text-5xl lg:text-6xl py-2 w-fit bg-[#00000095]">{t('events.title')}</p>
              <h1 className="image-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4 w-fit bg-[#00000095]">{t('events.content')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-8 mx-auto max-w-screen">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">{t('events.content')}</h2>
        <div className="space-y-8">
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivitiesPage
