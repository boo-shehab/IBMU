import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import logo from '../assets/images/logo.jpg'
import { db } from '../firebaseConfig';
import { useTranslation } from 'react-i18next';
import { OrbitProgress } from 'react-loading-indicators';


const NewsDetailPage = () => {
  const {i18n, t} = useTranslation("global")
  const { id } = useParams();
  const [newsPost, setNewsPost] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNewsPost = async () => {
      setLoading(true)
      try {
        if (!id) {
          console.error("No ID provided in URL parameters.");
          return;
        }
        const docRef = doc(db, 'news', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNewsPost(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching news post: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsPost();
  }, [id]);

  if (loading) {
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <OrbitProgress variant="dotted" color="#32cd32" size="large" text="" textColor="#520d0d" />
      </div>
    )
  }

  if (!newsPost) {
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <h1>No news found</h1>
      </div>
    )
  }
  
  return (
    <>
        <div className="w-full mx-auto">
  <div className="relative img-slider-img">
    {newsPost.img ? (
      <img
        src={newsPost.img}
        alt=""
        className="w-full h-full object-cover"
      />
    ) : (
      <img
        src={logo}
        alt=""
        className="w-full h-full object-contain max-h-[90vh] aspect-[10/6] md:aspect-[10/4]"
      />
    )}
    {/* Text Overlay for Larger Screens */}
    <div className="hidden md:block absolute w-full top-1/2 text-white transform -translate-y-1/2">
      <div className="container mx-auto px-4 max-w-screen">
        <h1 className="image-title text-xl md:text-3xl lg:text-4xl py-4 w-fit bg-[#00000095]">
          {newsPost.title[i18n.language]}
        </h1>
      </div>
    </div>
  </div>
  {/* Text Below Image for Mobile */}
  <div className="block md:hidden bg-[#00000095] text-white py-4">
    <div className="container mx-auto px-4 max-w-screen">
      <h1 className="image-title text-xl">
        {newsPost.title[i18n.language]}
      </h1>
    </div>
  </div>
</div>

        <div className="container my-10 mx-auto px-4 max-w-screen">
            {newsPost.category.en.toLowerCase() == 'study' && (
              <h1 style={{fontSize: '20px'}}>{t('news.Study_year')} {newsPost.date.toDate().getFullYear()}</h1>
            )}
            <div className="default-styles" dangerouslySetInnerHTML={{ __html: newsPost.content[i18n.language] }}></div>
        </div>
    </>
  );
};

export default NewsDetailPage;
