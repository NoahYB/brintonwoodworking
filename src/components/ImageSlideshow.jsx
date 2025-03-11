import { useState, useEffect } from "react";
import "../styles/ImageSlideshow.css";

const ImageSlideshow = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Disable body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Reset to first image when opening
    setCurrentIndex(0);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-overlay" onClick={onClose}>
      <div className="slideshow-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="slideshow-content">
          <img
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            className="slideshow-image"
          />

          <div className="slideshow-controls">
            <button className="nav-button prev" onClick={prevSlide}>
              ‹
            </button>
            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
            <button className="nav-button next" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;
