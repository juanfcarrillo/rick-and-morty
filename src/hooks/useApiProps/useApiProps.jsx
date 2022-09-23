import { useEffect, useState } from 'react'
import useApi from '../UseApi/UseApi'

export const useApiProps = ({ baseURL, emptyModelType }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const { setProperties, response, loading, error } = useApi({
    baseURL,
    props: {
      page: pageNumber
    }
  })
  const [props, setProps] = useState({ ...emptyModelType })

  useEffect(() => {
    if (pageNumber <= response?.info?.pages && pageNumber > 0) {
      setProperties({
        page: pageNumber
      })
    } else if (!(pageNumber <= response?.info?.pages)) {
      setPageNumber(1)
    } else {
      setPageNumber(response?.info?.pages)
    }
  }, [pageNumber])

  useEffect(() => {
    const valuesProps = Object.values(props)

    const haveSomeProps = valuesProps.some((elem) => elem)

    if (haveSomeProps) {
      setProperties({
        ...props,
        page: 1
      })
      setPageNumber(1)
    } else {
      setProperties({
        ...emptyModelType,
        page: 1
      })
      setPageNumber(1)
    }
  }, [props])

  return { response, loading, error, props, setProps, setPageNumber }
}

export default useApiProps
