import React, { useEffect, useState } from 'react'
import Event from '../components/Event';
import { useTranslation } from 'react-i18next';
import loadingImage from '../assets/images/news.webp'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ActivitiesPage = () => {

  const { t } = useTranslation("global");
  // const events = [
  //   {
  //     id: 1,
  //     image: 'https://via.placeholder.com/600x200',
  //     title: 'الملتقى الاقتصادي الدولي الأول 2024',
  //     description: 'عقد الملتقى الاقتصادي الدولي الأول في...',
  //     location: 'https://maps.app.goo.gl/YMsC2WAJtYyCiEWc8'
  //   },
  //   {
  //     id: 2,
  //     image: 'https://via.placeholder.com/600x200',
  //     title: 'ملتقى رجال وسيدات الأعمال السوري العراقي',
  //     description: 'يعد ملتقى رجال وسيدات الأعمال السوري العراقي...',
  //     location: 'https://maps.app.goo.gl/YMsC2WAJtYyCiEWc8'
  //   },
  // ];
  const [events, setEvents] = useState([]);
  
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
      <div className="w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto bg-gray-100">
        <div className="relative img-slider-img">
          <img
            src={loadingImage}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute w-full top-1/2 text-white transform -translate-y-1/2">
            <div className="container mx-auto px-4 max-w-screen">
              <p className="image-description text-gray-300 text-4xl md:text-5xl lg:text-6xl py-2">{t('events.title')}</p>
              <h1 className="image-title text-4xl md:text-5xl lg:text-6xl py-4">{t('events.content')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8 px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">أحدث ملتقيات</h2>
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
