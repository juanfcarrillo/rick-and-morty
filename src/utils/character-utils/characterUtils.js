export const CHARACTERS = {
  rick: {
    color: '#99d7d8'
  },
  morty: {
    color: '#e8e869'
  },
  summer: {
    color: '#e174cb'
  },
  beth: {
    color: '#eb5455'
  },
  jerry: {
    color: '#55692c'
  },
  default: {
    color: '#98eb3f'
  }
}

export const getCharacterType = ({ name }) => {
  const characters = Object.keys(CHARACTERS)
  const lowerName = name.toLowerCase()
  const character = characters.find(elem => !!elem.search(`${lowerName}`))
  return character || 'default'
}

export const getCharacterColor = ({ name }) => {
  const characters = Object.keys(CHARACTERS)
  const lowerName = name.toLowerCase()
  const character = characters.find(elem => lowerName.search(`${elem}`) > -1)
  return character ? CHARACTERS[character].color : CHARACTERS.default.color
}

export default getCharacterType
