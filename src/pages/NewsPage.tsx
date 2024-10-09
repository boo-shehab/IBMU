import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import BlogCard from '../components/BlogCard';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';



const NewsPage = () => {
    
    const { t } = useTranslation("global");
    const [newsPosts, setNewsPosts] = useState([]);
    
    useEffect(() => {
      const fetchNewsPosts = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'news'));
          console.log(querySnapshot.docs[0]);
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

// const addBlogPost = async (post) => {
//   try {
//     const docRef = await addDoc(collection(db, 'blogPosts'), post);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };
// addBlogPost({
  // img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  // category: {
  //   en: 'news',
  //   ar: 'اخبار'
  // },
  // title: {
  //   en: "Improving employee quality requires sustainable growth.",
  //   ar: 'تعزيز رضا الموظفين وتحقيق النمو المستدام',
  // },
  // content: {
  //   en: "Improving employee quality requires sustainable growth.",
  //   ar: "تعزيز رضا الموظفين وتحقيق النمو المستدام"
  // }
// })
  return (
    <div className='bg-gray-100'>
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
      <div className='max-w-screen'>
        <div className="container mx-auto px-4 py-20 max-w-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {newsPosts.map((post, index) => (
              <div
                key={index}
                className={index === 0 ? "col-span-full" : ""}
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
