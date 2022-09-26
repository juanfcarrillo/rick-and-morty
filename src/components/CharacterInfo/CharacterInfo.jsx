import { getCharacterColor } from '../../utils/character-utils/characterUtils'
import { CharacterProperties } from '../CharacterProperties'
import './styles/CharacterInfo.css'

const CharacterInfo = ({ image, origin, location, name, ...props }) => {
  const characterColor = getCharacterColor({ name })

  return (
    <div className="character-container">
      <div className="character-image-container">
        <img
          className="character-image"
          src={image}
          alt="character image"
        />
      </div>
      <div className="character-info">
        <h3 className="character-name">{name}</h3>
        <div className="character-location">
          <div className="lateral-border">
            <p>{origin.name}</p>
            <p className="strong">Origin</p>
          </div>
          <div className="lateral-border">
            <p>{location.name}</p>
            <p className="strong">Location</p>
          </div>
        </div>
        <CharacterProperties {...props} />
      </div>
      <div className="character-type" style={{ backgroundColor: `${characterColor}` }}></div>
    </div>
  )
}

export default CharacterInfo
