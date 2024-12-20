import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import BlogCard from '../components/BlogCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import landingImage from '../assets/images/news.webp'



const NewsPage = () => {
    
    const { t } = useTranslation("global");
    const [newsPosts, setNewsPosts] = useState<any[]>([]);
    
    useEffect(() => {
      const fetchNewsPosts = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'news'));
          const posts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setNewsPosts(posts);
          
        } catch (error) {
          console.error("Error fetching news posts: ", error);
        }
      };
  
      fetchNewsPosts();
    }, []);

  return (
    <div className='bg-gray-100'>
      <div className="w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/5] mx-auto">
        <div className="relative img-slider-img">
          <img
            src={landingImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full top-1/2 text-white transform -translate-y-1/2">
            <div className="container mx-auto px-4 max-w-screen">
              <p className="image-description text-gray-300 text-xl sm:text-2xl md:text-5xl lg:text-6xl py-2 w-fit bg-[#00000095]">{t('news.title')}</p>
              <h1 className="image-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4 w-fit bg-[#00000095]">{t('news.content')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-screen'>
        <div className="container mx-auto px-4 py-20 max-w-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
            {newsPosts.map((post, index) => (
              <div
                key={index}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
