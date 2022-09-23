import './styles/CharacterCard.css'
import { getCharacterColor } from '../../utils/character-utils/characterUtils'
import { RiAliensLine as AlienIcon } from 'react-icons/ri'
import { CharacterPropierties } from '../CharacterPropierties'
import { useState } from 'react'
import { CharacterInfo } from '../CharacterInfo'

const CharacterCard = (props) => {
  const characterColor = getCharacterColor({ name: props.name })

  const [openMoreInfo, setOpenMoreInfo] = useState(false)

  const exit = () => {
    setOpenMoreInfo(false)
  }

  return (
    <>
    <div className="card" onClick={() => setOpenMoreInfo((open) => !open)}>
      <div className="card-info">
        <div className="img-container">
          <img
            className="character-image"
            src={props.image}
            alt="Rick And Morty Character"
          />
        </div>
        <h4 className="character-name">{props.name}</h4>
      </div>
      <CharacterPropierties {...props}/>
      <div
        className="bottom-description"
        style={{ backgroundColor: `${characterColor}` }}
      >
        <div className="character-showmore">
          Click For More
          <AlienIcon size="1.5em" />
        </div>
      </div>
    </div>
    {openMoreInfo && <CharacterInfo {...props} exit={exit}/>}
    </>
  )
}

export default CharacterCard
