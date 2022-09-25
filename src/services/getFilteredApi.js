export const getFilteredApi = (baseURL) => async (properties) => {
  const propertiesEntries = properties ? Object.entries(properties) : []
  const nonEmptyProperties = propertiesEntries.filter(elem => {
    if (typeof elem[1] === 'object' && Array.from(elem[1]).length === 0) return false
    return !!elem[1]
  })
  const query = nonEmptyProperties.reduce((acc, elem) => (`${acc}${elem[0]}=${elem[1]}&`), '')
  const response = await fetch(`${baseURL}/?${query}`)
  const data = await response.json()
  return data
}
