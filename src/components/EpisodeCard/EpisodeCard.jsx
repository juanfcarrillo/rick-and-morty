import { getSeasonColor } from '../../utils/episode-utils'
import { SecondaryCard } from '../SecondaryCard'
import './styles/EpisodeCard.css'

const EpisodeCard = ({ name, episode, characters, ...props }) => {
  const seasonColor = getSeasonColor({ episode })
  return (
    <SecondaryCard>
      <div className="props-container">
        <h2 className="card-name">{name}</h2>
        <p>Air Date: {props.air_date}</p>
        <p>Episode: {episode}</p>
        <p>Characters: {characters.length}</p>
      </div>
      <div
        className="type"
        style={{ backgroundColor: `${seasonColor}` }}
      />
    </SecondaryCard>
  )
}

export default EpisodeCard
