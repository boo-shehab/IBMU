import { useState, useEffect } from "react"
import { FaAngleLeft, FaAngleRight, FaCircle, FaDotCircle } from "react-icons/fa"
import "../style/ImageSlider.css"

type ImageSliderProps = {
  images: {
    url: string
    alt: string
    title: string
    description: string
  }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

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
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
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
              <h1 className="image-title text-5xl py-4">{title}</h1>
              <p className="image-description text-xl py-2">{description}</p>
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
