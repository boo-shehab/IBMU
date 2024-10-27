import { ImageSlider } from '../components/ImageSlider'
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
      <ImageSlider />
    </div>
    <AboutUs />
    <BlogSection />
    {/* <ConnectUs /> */}
    </>
  )
}

export default HomePage
