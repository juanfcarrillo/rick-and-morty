import { getSeasonColor } from '../../utils/episode-utils'
import './styles/EpisodeCard.css'

const EpisodeCard = ({ name, episode, characters, ...props }) => {
  const seasonColor = getSeasonColor({ episode })
  return (
    <div className="episode-card">
      <div className="props-container">
        <h2 className="card-name">{name}</h2>
        <p>Air Date: {props.air_date}</p>
        <p>Episode: {episode}</p>
        <p>Characters: {characters.length}</p>
      </div>
      <div
        className="episode-type"
        style={{ backgroundColor: `${seasonColor}` }}
      />
    </div>
  )
}

export default EpisodeCard
