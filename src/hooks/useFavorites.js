import { useState, useEffect } from "react";

const useFavorites = (key = "favorites") => {
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(key)) || [];
    setFavorites(storedFavorites);
  }, []);

  // Escuchar cambios en localStorage en tiempo real y actualizar el estado
  useEffect(() => {
    const syncFavorites = () => {
      const storedFavorites = JSON.parse(localStorage.getItem(key)) || [];
      setFavorites(storedFavorites);
    };

    window.addEventListener("storage", syncFavorites);
    return () => window.removeEventListener("storage", syncFavorites);
  }, []);

  // Función para alternar favoritos y sincronizar con localStorage
  const toggleFavorite = (item) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === item.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem(key, JSON.stringify(updatedFavorites));

    // Disparar evento para actualizar todos los componentes en tiempo real
    window.dispatchEvent(new Event("storage"));
  };

  return { favorites, toggleFavorite };
};

export { useFavorites };
