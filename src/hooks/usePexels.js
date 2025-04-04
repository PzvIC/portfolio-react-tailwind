import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1/';

const usePexels = (query, perPage = 20) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    const fetchImages = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch(`${BASE_URL}search?query=${query}&per_page=${perPage}`, {
            headers: { Authorization: API_KEY },
          });

          if (!response.ok) throw new Error(`Error: ${response.status}`);

          const result = await response.json();
          setData(result.photos);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }, 1000);
    };

    fetchImages();
  }, [query, perPage]);

  return { data, loading, error };
};

export { usePexels };
