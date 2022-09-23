export const getFilteredApi = (baseURL) => async (properties) => {
  const propertiesEntries = properties ? Object.entries(properties) : []
  const query = propertiesEntries.reduce((acc, elem) => (elem[1] ? `${acc}${elem[0]}=${elem[1]}&` : acc), [''])
  try {
    const response = await fetch(`${baseURL}/?${query}`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}
