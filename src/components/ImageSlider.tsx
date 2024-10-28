import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaCircle, FaDotCircle } from "react-icons/fa";
import "../style/ImageSlider.css";
import { useTranslation } from "react-i18next";
import { getFirestore, collection, getDocs } from "firebase/firestore";

interface ImageData {
  url: string;
  title?: {
    ar?: string;
    en?: string;
  };
  description?: {
    ar?: string;
    en?: string;
  };
}

export function ImageSlider() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { i18n } = useTranslation('global');

  useEffect(() => {
    const fetchImages = async () => {
      const db = getFirestore();
      const imageCollection = collection(db, "imageSliderData");
      const imageSnapshot = await getDocs(imageCollection);
      const imageList: ImageData[] = imageSnapshot.docs.map(doc => ({
        url: doc.data().url,
        title: doc.data().title,
        description: doc.data().description,
      }));
      setImages(imageList);
    };

    fetchImages();
  }, []);

  function showNextImage() {
    setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
  }

  useEffect(() => {
    const intervalId = setInterval(showNextImage, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

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
        {images.map(({ url, title, description }, index) => (
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
              alt=""
              aria-hidden={imageIndex !== index}
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: images.length > 1 ? 'brightness(50%)' : 'brightness(100%)' }}
            />
            <div className="absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="image-title text-xl md:text-3xl py-4">
                {title?.[i18n.language === 'ar' ? 'ar' : 'en'] || ''}
              </h1>
              <p className="image-description text-md md:text-2xl py-2">
                {description?.[i18n.language === 'ar' ? 'ar' : 'en'] || ''}
              </p>
            </div>
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
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
        </>
      )}
      <div id="after-image-slider-controls" />
    </section>
  );
}
