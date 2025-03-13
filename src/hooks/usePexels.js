import { useState, useEffect } from "react"

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.pexels.com/v1/"

const usePexels = (query, perPage = 20) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query) return

    setLoading(true) // Keep loading true during delay

    const fetchImages = async () => {
      setError(null)

      setTimeout(async () => {
        try {
          const response = await fetch(`${BASE_URL}search?query=${query}&per_page=${perPage}`, {
            headers: { Authorization: API_KEY },
          })

          if (!response.ok) throw new Error(`Error: ${response.status}`)

          const result = await response.json()
          setData(result.photos)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false) // Only stop loading after data is fetched
        }
      }, 1000) // 1-second delay before making the API call
    }

    fetchImages()
  }, [query])

  return { data, loading, error }
}

export { usePexels }
