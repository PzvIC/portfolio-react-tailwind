import { useState } from "react";
import { useFavorites } from "../hooks/useFavorites";
import "../styles/Search.css";

function Search({ appSize }) {
    const { favorites } = useFavorites();
    const [query, setQuery] = useState("");

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

            <div className={`photo-grid-${appSize}`}>
                {filteredFavorites.length > 0 ? (
                    filteredFavorites.map((photo) => (
                        <div key={photo.id} className="photo-card">
                            <img
                                src={getImageSrc(photo)}
                                alt={photo.alt}
                                className="photo-image"
                            />
                            <div className={`photo-text-container photo-text-container__${appSize}`}>
                                {appSize !== "mobile" && (
                                    <p className="photo-title">{photo.alt}</p>
                                )}

                                <p className="photo-photographer">{photo.photographer}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No favorites yet.</p>
                )}
            </div>
        </div>
    );
}


export { Search };
