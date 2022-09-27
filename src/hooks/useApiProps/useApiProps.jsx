import { useEffect, useState } from 'react'
import { getFilteredApi } from '../../services'

export const useApiProps = ({ baseURL, emptyModelType, initialProps }) => {
  const [insideProps, setInsideProps] = useState({ ...emptyModelType, page: 1, ...initialProps })
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(true)
  // const [error, setError] = useState()
  const fetchProperties = getFilteredApi(baseURL)

  const setProps = (newProperties) => {
    const newProps = { ...insideProps, ...newProperties }
    setInsideProps(newProps)
  }

  const fetchCharacters = async () => {
    const fetchedCharacters = await fetchProperties(insideProps)
    setResponse(fetchedCharacters)
    setLoading(false)
  }

  useEffect(() => {
    if (insideProps.page > response?.info?.pages) {
      setInsideProps({
        ...insideProps,
        page: 1
      })
    } else if (insideProps.page < 1) {
      setInsideProps({
        ...insideProps,
        page: response?.info?.pages
      })
    } else {
      fetchCharacters()
    }
  }, [insideProps])

  return { response, apiProps: insideProps, setApiProps: setProps, loading }
}

export default useApiProps
