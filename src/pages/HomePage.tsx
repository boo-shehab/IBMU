import React from 'react'
import { useTranslation } from 'react-i18next'
import { ImageSlider } from '../components/ImageSlider'
import { images } from '../assets/images/image-data'
import AboutUs from '../components/AboutUs'
import BlogSection from '../components/BlogSection'
import ConnectUs from '../components/ConnectUs'

const HomePage = () => {
  const [t, i18n] = useTranslation("global");
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
