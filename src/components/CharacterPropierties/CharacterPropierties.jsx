import './styles/CharacterPropierties.css'

const CharacterPropierties = ({ species, episode, status }) => {
  return (
    <div className="character-properties">
      <div className="character-especie">
        <p className="properties-description">{species}</p>
        <p className="properties-title">Especies</p>
      </div>
      <div className="character-episodes lateral-border">
        <p className="properties-description">{episode.length}</p>
        <p className="properties-title">Appearances</p>
      </div>
      <div className="character-status">
        <p className="properties-description">{status}</p>
        <p className="properties-title">Estatus</p>
      </div>
    </div>
  )
}

export default CharacterPropierties
