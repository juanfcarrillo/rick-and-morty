import './styles/CharacterProperties.css'

const CharacterProperties = ({ species, episode, status }) => {
  return (
    <div className="character-properties">
      <div className="character-specie">
        <p className="properties-description">{species}</p>
        <p className="properties-title">Species</p>
      </div>
      <div className="character-episodes lateral-border">
        <p className="properties-description">{episode.length}</p>
        <p className="properties-title">Appearances</p>
      </div>
      <div className="character-status">
        <p className="properties-description">{status}</p>
        <p className="properties-title">Status</p>
      </div>
    </div>
  )
}

export default CharacterProperties
