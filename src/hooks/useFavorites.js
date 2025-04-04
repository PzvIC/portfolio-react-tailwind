import { useState, useEffect } from 'react';

const useFavorites = (key = 'favorites') => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(key)) || [];
    setFavorites(storedFavorites);
  }, [key]);

  useEffect(() => {
    const syncFavorites = () => {
      const storedFavorites = JSON.parse(localStorage.getItem(key)) || [];
      setFavorites(storedFavorites);
    };

    window.addEventListener('storage', syncFavorites);
    return () => window.removeEventListener('storage', syncFavorites);
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
    window.dispatchEvent(new Event('storage'));
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem(key, JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event('storage'));
  };

  return { favorites, toggleFavorite, removeFavorite };
};

export { useFavorites };
