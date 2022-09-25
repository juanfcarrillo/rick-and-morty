export const CHARACTERS = {
  1: {
    color: '#d0e57b'
  },
  2: {
    color: '#7b7e7b'
  },
  3: {
    color: '#e1a17b'
  },
  4: {
    color: '#a6d6eb'
  },
  5: {
    color: '#201655'
  },
  default: {
    color: 'black'
  }
}

export const getSeason = ({ episode }) => {
  const tokenizedEpisode = episode.split('E')
  const season = tokenizedEpisode[0].replace('S', '')
  return season
}

export const getSeasonColor = ({ episode }) => {
  const season = getSeason({ episode })
  const seasonNumber = Number(season)
  return seasonNumber ? CHARACTERS[seasonNumber].color : CHARACTERS.default.color
}

export default getSeasonColor
