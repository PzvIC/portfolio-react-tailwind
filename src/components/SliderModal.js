import React from "react"
import "../styles/SliderModal.css"

function SliderModal({ image, onClose }) {
    if (!image) return null

    return (
        <div className="slider-modal">
            <div className="slider-modal__overlay" onClick={onClose}></div>
            <div className="slider-modal__content">
                <button className="slider-modal__close" onClick={onClose}>&times;</button>
                <img src={image.src.large} alt={image.photographer} className="slider-modal__image" />
                <p className="slider-modal__text">Photo by {image.photographer}</p>
            </div>
        </div>
    )
}

export { SliderModal }
