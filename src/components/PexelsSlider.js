import React, { useState } from "react";
import { usePexels } from "../hooks/usePexels";
import { useFavorites } from "../hooks/useFavorites";
import Slider from "react-slick";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PexelsSlider.css";
import { SliderModal } from "./SliderModal";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const topics = ["nature", "technology", "animals", "space", "cars", "food"];

const CustomPrevArrow = ({ appSize, style, onClick }) => (
  <button
    type="button"
    className={`
      pexels-arrow
      pexels-arrow--left
      ${appSize === 'tablet' ? 'pexels-arrow--tablet' : ''}
      ${appSize === 'desktop' ? 'pexels-arrow--desktop' : ''}
    `}
    style={{ ...style }}
    onClick={onClick}
  >
    <ChevronLeftIcon className="pexels-arrow__icon" />
  </button>
);

const CustomNextArrow = ({ appSize, style, onClick }) => (
  <button
    type="button"
    className={`
      pexels-arrow
      pexels-arrow--right
      ${appSize === 'tablet' ? 'pexels-arrow--tablet' : ''}
      ${appSize === 'desktop' ? 'pexels-arrow--desktop' : ''}
    `}
    style={{ ...style }}
    onClick={onClick}
  >
    <ChevronRightIcon className="pexels-arrow__icon" />
  </button>
);


const PexelsSlider = ({ appSize }) => {
  const [query, setQuery] = useState("nature");
  const { data: images, loading, error } = usePexels(query, 20);
  const [selectedImage, setSelectedImage] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  const slidesToShow = appSize === "mobile" ? 1 : appSize === "tablet" ? 2 : 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow appSize={appSize} />,
    nextArrow: <CustomNextArrow appSize={appSize} />,
  };

  return (
    <div className="pexels-slider">
      <p className="pexels-slider__info">
        The images come from the API of {" "}
        <a
          href="https://www.pexels.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pexels-slider__link"
        >
          Pexels.com
        </a>
      </p>

      <div className="pexels-slider__controls">
        <Listbox value={query} onChange={setQuery}>
          <div className="pexels-select__wrapper">
            <Listbox.Button
              className={`
              pexels-select__button
              ${appSize === "mobile" ? "pexels-select--sm pexels-select--full" : ""}
              ${appSize === "tablet" ? "pexels-select--md pexels-select--medium" : ""}
              ${appSize === "desktop" ? "pexels-select--lg pexels-select--centered" : ""}
            `}
            >
              <span className="pexels-select__text">{query}</span>
              <span className="pexels-select__icon-wrapper">
                <ChevronUpDownIcon
                  className="pexels-select__icon"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Listbox.Options
              className={`
                pexels-select__options
                ${appSize === "mobile" ? "pexels-select--full" : ""}
                ${appSize === "tablet" ? "pexels-select--medium pexels-select--centered-position" : ""}
                ${appSize === "desktop" ? "pexels-select--centered pexels-select--centered-position" : ""}
              `}
            >


              {topics.map((topic) => (
                <Listbox.Option
                  key={topic}
                  value={topic}
                  className={({ active }) =>
                    `pexels-select__option ${active ? "pexels-select__option--active" : ""
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`pexels-select__option-text ${selected ? "pexels-select__option-text--selected" : ""
                          }`}
                      >
                        {topic}
                      </span>
                      {selected && (
                        <span className="pexels-select__check">
                          <CheckIcon
                            className="pexels-select__check-icon"
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>

          </div>
        </Listbox>
      </div>

      {loading && (
        <div className="pexels-slider__skeleton-container">
          {[...Array(slidesToShow)].map((_, index) => (
            <div key={index} className="pexels-slider__skeleton"></div>
          ))}
        </div>
      )}

      {error && <p className="pexels-slider__error">Error: {error}</p>}

      {!loading && !error && images.length > 0 && (
        <Slider {...settings} className="pexels-slider__carousel">
          {images.map((img) => {
            const isFavorite = favorites.some((fav) => fav.id === img.id);

            return (
              <div key={img.id} className="pexels-slider__slide">
                <div className="pexels-slider__image-container">
                  <img
                    src={img.src.large}
                    alt={img.photographer}
                    className="pexels-slider__image"
                    onClick={() => setSelectedImage(img)}
                  />
                  <button
                    className={`pexels-slider__favorite-button ${isFavorite ? "pexels-slider__favorite-active" : ""
                      }`}
                    onClick={() => toggleFavorite(img)}
                  >
                    <HeartIcon
                      className={`pexels-slider__heart-icon ${isFavorite ? "text-red-600" : "text-white/55"
                        }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      )}

      <SliderModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export { PexelsSlider };
