import React, { useState } from "react";
import { usePexels } from "../hooks/usePexels";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PexelsSlider.css";
import { SliderModal } from "./SliderModal";

const PexelsSlider = ({ appSize }) => {
  const [query, setQuery] = useState("nature");
  const { data: images, loading, error } = usePexels(query, 20);
  const [selectedImage, setSelectedImage] = useState(null);

  // Definir cuántas imágenes mostrar según `screenSize`
  const slidesToShow = appSize === "mobile" ? 1 : appSize === "tablet" ? 2 : 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Skeleton Loader basado en `slidesToShow`
  const renderSkeleton = () => (
    <div className="pexels-slider__skeleton-container">
      {[...Array(slidesToShow)].map((_, index) => (
        <div key={index} className="pexels-slider__skeleton"></div>
      ))}
    </div>
  );

  return (
    <div className="pexels-slider">
      <h1 className="pexels-slider__title">Image Gallery - Fetch API</h1>
      <p className="pexels-slider__info">
        Explore the images from 
        <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" 
          className="pexels-slider__link"> Pexels.com</a>. 
        Choose a topic and enjoy the photos!
      </p>
      <p className="pexels-slider__info">When you change the topic, a simulated 1-second delay will display a loading skeleton animation.</p>

      <div className="pexels-slider__controls">
        <label className="pexels-slider__label">Select a topic:</label>
        <select
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="pexels-slider__select"
        >
          <option value="nature">Nature</option>
          <option value="technology">Technology</option>
          <option value="animals">Animals</option>
          <option value="space">Space</option>
          <option value="cars">Cars</option>
          <option value="food">Food</option>
        </select>
      </div>

      {loading && renderSkeleton()}

      {error && <p className="pexels-slider__error">Error: {error}</p>}

      {!loading && !error && images.length > 0 && (
        <Slider {...settings} className="pexels-slider__carousel">
          {images.map(img => (
            <div key={img.id} className="pexels-slider__slide">
              <img 
                src={img.src.large} 
                alt={img.photographer} 
                className="pexels-slider__image cursor-pointer"
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </Slider>
      )}

      <SliderModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export { PexelsSlider };
