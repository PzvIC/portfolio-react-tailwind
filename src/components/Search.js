import { useState } from "react";
import { useFavorites } from "../hooks/useFavorites";
import { SliderModal } from "./SliderModal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "../styles/Search.css";

function Search({ appSize }) {
    const { favorites, removeFavorite } = useFavorites();
    const [query, setQuery] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [photoToRemove, setPhotoToRemove] = useState(null);

    const filteredFavorites = favorites.filter(photo =>
        photo.alt?.toLowerCase().includes(query.toLowerCase()) ||
        photo.photographer?.toLowerCase().includes(query.toLowerCase())
    );

    const getImageSrc = (photo) => {
        if (appSize === "mobile") return photo.src.medium;
        if (appSize === "tablet") return photo.src.large;
        return photo.src.large;
    };

    return (
        <div className={`search-container search-container__${appSize}`}>
            <input
                type="text"
                placeholder="Search by description or photographer..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />

            <div className={`photo-grid photo-grid__${appSize} ${(["desktop", "tablet"].includes(appSize) && filteredFavorites.length === 1) ? "photo-grid__center-single" : ""}`}>


                {filteredFavorites.length > 0 ? (
                    filteredFavorites.map((photo) => (
                        <div key={photo.id} className="photo-card">
                            <button
                                className="remove-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setPhotoToRemove(photo);
                                }}
                                title="Remove from favorites"
                            >
                                <XMarkIcon className="remove-icon" />
                            </button>

                            <img
                                src={getImageSrc(photo)}
                                alt={photo.alt}
                                className="photo-image"
                                onClick={() => setSelectedImage(photo)}
                            />

                            <div className={`photo-text-container photo-text-container__${appSize}`}>
                                {appSize !== "mobile" && (
                                    <p className="photo-title">{photo.alt}</p>
                                )}
                                <p className="photo-photographer">{photo.photographer}</p>
                            </div>
                        </div>
                    ))
                ) : favorites.length > 0 ? (
                    <p className="no-results">No Matches.</p>
                ) : (
                    <p className="no-results">No favorites yet.</p>
                )}
            </div>

            {selectedImage && (
                <SliderModal
                    image={selectedImage}
                    appSize={appSize}
                    onClose={() => setSelectedImage(null)}
                />
            )}

            {photoToRemove && (
                <div className="confirm-modal-overlay">
                    <div className="confirm-modal">
                        <p className="confirm-modal-text">
                            Are you sure you want to remove this image from favorites?
                        </p>
                        <div className="confirm-modal-buttons">
                            <button
                                className="confirm-cancel"
                                onClick={() => setPhotoToRemove(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="confirm-remove"
                                onClick={() => {
                                    removeFavorite(photoToRemove.id);
                                    setPhotoToRemove(null);
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export { Search };
