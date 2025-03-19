import { useState, useEffect } from "react";

const useFavorites = (key = "favorites") => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(key)) || [];
    setFavorites(storedFavorites);
  }, [key]);

  const toggleFavorite = (item) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === item.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem(key, JSON.stringify(updatedFavorites));
  };

  return { favorites, toggleFavorite };
};

export { useFavorites }
