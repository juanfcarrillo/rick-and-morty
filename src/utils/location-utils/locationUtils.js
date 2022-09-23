export const LOCATIONS = {
  planet: {
    color: '#db8134'
  },
  dimension: {
    color: '#f6de3c'
  },
  menagerie: {
    color: '#3a3685'
  },
  spacestation: {
    color: '#779999'
  },
  cluster: {
    color: '#11162f'
  },
  microverse: {
    color: '#f9ccff'
  },
  tv: {
    color: '#bdfee8'
  },
  default: {
    color: '#98eb3f'
  }
}

const getLocationType = ({ type }) => {
  const locations = Object.keys(LOCATIONS)
  const lowerType = type.toLowerCase().trim().replace(' ', '')
  const location = locations.find(elem => !!elem.search(`${lowerType}`))
  return location || 'default'
}

export const getLocationColor = ({ type }) => {
  const locations = Object.keys(LOCATIONS)
  const lowerType = type.toLowerCase()
  const location = locations.find(elem => lowerType.search(`${elem}`) > -1)
  return location ? LOCATIONS[location].color : LOCATIONS.default.color
}

export default getLocationType
