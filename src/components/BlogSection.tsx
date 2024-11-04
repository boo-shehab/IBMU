import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BlogCard from './BlogCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const BlogSection = () => {
  const { t } = useTranslation("global");
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'news'));
        const posts: any = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNewsPosts(posts.slice(-5));
      } catch (error) {
        console.error("Error fetching news posts: ", error);
      }
    };

    fetchNewsPosts();
  }, []);

  return (
    <section className="bg-gray-100 py-20 md:py-30">
      <div className="container mx-auto px-4 max-w-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-md md:text-2xl font-semibold">{t('home.blogSection.title')}</h2>
          <div className="flex space-x-2">
            <Link to="/news-events/news" className="p-2 hover:text-yellow-500 text-sm md:text-lg underline rounded-full">
              {t('home.blogSection.seeMore')}
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {newsPosts.map((post, index) => (
            <BlogCard key={index} post={post} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
