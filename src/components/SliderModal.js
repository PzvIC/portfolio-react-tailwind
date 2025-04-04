import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/solid';
import '../styles/SliderModal.css';

function SliderModal({ image, appSize, onClose }) {
  const { favorites, toggleFavorite } = useFavorites();

  if (!image) return null;

  const isFavorite = favorites.some((fav) => fav.id === image.id);

  const getModalImageSrc = () => {
    if (appSize === 'desktop' && image.src.large2x) {
      return image.src.large2x;
    }
    return image.src.large;
  };

  return (
    <div className="slider-modal">
      <div className="slider-modal__overlay" onClick={onClose}></div>
      <div className="slider-modal__content">
        <button className="slider-modal__close" onClick={onClose}>
          <XMarkIcon className="slider-modal__close-icon" />
        </button>

        <button
          className={`slider-modal__favorite-button ${isFavorite ? 'slider-modal__favorite-active' : ''}`}
          onClick={() => toggleFavorite(image)}
        >
          <HeartIcon
            className={`slider-modal__heart-icon ${isFavorite ? 'text-red-600' : 'text-white/55'}`}
          />
        </button>

        <img src={getModalImageSrc()} alt={image.photographer} className="slider-modal__image" />
        <p className="slider-modal__text">Photo by {image.photographer}</p>
      </div>
    </div>
  );
}

export { SliderModal };
