import { useEffect, useState } from 'react'
import { getFilteredApi } from '../../services'

const useApi = ({ baseURL, properties }) => {
  const [insideProperties, setInsideProperties] = useState(properties)
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const fetchProperties = getFilteredApi(baseURL)

  const setProperties = (newProperties) => {
    const newProps = { ...insideProperties, ...newProperties }
    setInsideProperties(newProps)
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const fetchedCharacters = await fetchProperties(insideProperties)
        setResponse(fetchedCharacters)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchCharacters()
  }, [insideProperties])

  return { setProperties, response, loading, error }
}

export default useApi
