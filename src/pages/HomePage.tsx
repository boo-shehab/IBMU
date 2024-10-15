import { ImageSlider } from '../components/ImageSlider'
import { images } from '../assets/images/image-data'
import AboutUs from '../components/AboutUs'
import BlogSection from '../components/BlogSection'

const HomePage = () => {
  return (
    <>
    <div
      style={{
        width: "100%",
        maxHeight: '90vh',
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={images} />
    </div>
    <AboutUs />
    <BlogSection />
    {/* <ConnectUs /> */}
    </>
  )
}

export default HomePage
