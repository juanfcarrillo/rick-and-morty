import { getLocationColor } from '../../utils/location-utils'
import { SecondaryCard } from '../SecondaryCard'
import './styles/LocationCard.css'

const LocationCard = ({ name, type, dimension, residents, ...props }) => {
  const locationColor = getLocationColor({ type })

  return (
    <SecondaryCard>
      <div className="props-container">
        <h2 className='card-name'>{name}</h2>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
        <p>Residents: {residents.length}</p>
      </div>
      <div
        className="type"
        style={{ backgroundColor: `${locationColor}` }}
      />
    </SecondaryCard>
  )
}

export default LocationCard
