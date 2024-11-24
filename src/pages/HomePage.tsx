import { ImageSlider } from '../components/ImageSlider'
import AboutUs from '../components/AboutUs'
import { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  
  const { i18n } = useTranslation("global");
  const [boardMembers, setBoardMembers] = useState<any>(null);
  
  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'boardOfDirectors'));
        const posts: any = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBoardMembers(posts[0]);
      } catch (error) {
        console.error("Error fetching news posts: ", error);
        setBoardMembers(null)
      }
    };

    fetchBoardMembers();
  }, [])
  return (
    <>
    <div
      style={{
        width: "100%",
        maxHeight: '80vh',
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider />
    </div>
    {boardMembers && (
    <div className="container my-10 mx-auto px-4 max-w-screen">
        <div className="w-full max-h-[90vh] aspect-[10/8] md:aspect-[10/6] mx-auto overflow-hidden">
        <div className="relative img-slider-img">
            <img
            src={boardMembers?.img}
            alt=""
            className="w-full h-full object-cover"
            />
            <div className="absolute w-full top-1/2 text-white transform -translate-y-1/2">
              <div className="container mx-auto px-4 max-w-screen">
                  <h1 className="image-title text-xl md:text-3xl lg:text-4xl py-4 w-fit bg-[#00000095]">{boardMembers?.title[i18n.language]}</h1>
              </div>
            </div>
        </div>
        </div>
        <div className="container my-10 mx-auto px-4 max-w-screen">
            <div className="default-styles" dangerouslySetInnerHTML={{ __html: boardMembers?.content[i18n.language] }}></div>
        </div>
    </div>
    )}
    <AboutUs />
    {/* <BlogSection /> */}
    {/* <ConnectUs /> */}
    </>
  )
}

export default HomePage
