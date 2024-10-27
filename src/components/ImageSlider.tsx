import { useState, useEffect } from "react"
import { FaAngleLeft, FaAngleRight, FaCircle, FaDotCircle } from "react-icons/fa"
import "../style/ImageSlider.css"
import image1 from '../assets/images/slideImages1.jpg'
import image2 from '../assets/images/slideImages2.jpg'
import image3 from '../assets/images/slideImages3.jpg'
import { useTranslation } from "react-i18next"

export const images = [
  {
    url: image1,
    alt: 'first image',
    title: { ar: ' تعزيز العلاقات التجارية', en: "Strengthening Business Relationships"},
    description: { ar: 'بناء علاقات بين رجال الأعمال العراقيين من أجل مستقبل مزدهر', en: "Building connections among Iraqi businessmen for a prosperous future"}
  },
  {
    url: image2,
    alt: 'second image',
    title: { ar: ' دعم التنمية الاقتصادية', en: "Supporting Economic Development"},
    description: { ar: 'بناء علاقات بين رجال الأعمال العراقيين من أجل مستقبل مزدهر', en: "Collaborating to create sustainable projects for growth"}
  },
  {
    url: image3,
    alt: 'third image',
    title: { ar: ' تعزيز فرص الاستثمار', en: "Promoting Investment Opportunities"},
    description: { ar: 'التعاون لإنشاء مشاريع مستدامة للنمو', en: "Encouraging investments across various sectors in Iraq"}
  },
];

export function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0)
  const { i18n } = useTranslation('global');

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  useEffect(() => {
    const intervalId = setInterval(showNextImage, 5000)

    return () => clearInterval(intervalId)
  }, [images.length])

  return (
    <section
      aria-label="Image Slider"
      dir="ltr"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt, title, description }, index) => (
          <div
            key={url}
            style={{
              position: "relative",
              flexShrink: 0,
              width: "100%",
              height: "100%",
              translate: `${-100 * imageIndex}%`,
            }}
            className="img-slider-img"
          >
            <img
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: 'brightness(50%)'}}
            />
            <div className="absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="image-title text-xl md:text-3xl py-4">{title[i18n.language === 'ar'? 'ar':'en' ]}</h1>
              <p className="image-description text-md md:text-2xl py-2">{description[i18n.language === 'ar'? 'ar':'en']}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <FaAngleLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <FaAngleRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <FaDotCircle aria-hidden />
            ) : (
              <FaCircle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}
