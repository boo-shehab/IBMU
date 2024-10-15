import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useTranslation } from 'react-i18next';


const NewsDetailPage = () => {
  const {i18n} = useTranslation("global")
  const { id } = useParams();
  const [newsPost, setNewsPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsPost = async () => {
      try {
        if (!id) {
          console.error("No ID provided in URL parameters.");
          setLoading(false);
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
    return <div>Loading...</div>;
  }

  if (!newsPost) {
    return <div>No news found</div>;
  }
  
  return (
    <>
        <div className="w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto">
        <div className="relative img-slider-img">
            <img
            src={newsPost.img}
            alt=""
            className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute w-full top-1/2 text-white transform -translate-y-1/2">
            <div className="container mx-auto px-4 max-w-screen">
                <h1 className="image-title text-xl md:text-3xl lg:text-4xl py-4">{newsPost.title[i18n.language]}</h1>
            </div>
            </div>
        </div>
        </div>
        <div className="container my-10 mx-auto px-4 max-w-screen">
            <div className="default-styles" dangerouslySetInnerHTML={{ __html: newsPost.content[i18n.language] }}></div>
        </div>
    </>
  );
};

export default NewsDetailPage;
