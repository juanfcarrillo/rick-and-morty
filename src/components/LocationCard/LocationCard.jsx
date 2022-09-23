import { getLocationColor } from '../../utils/location-utils'
import './styles/LocationCard.css'

const LocationCard = ({ name, type, dimension, residents, ...props }) => {
  const locationColor = getLocationColor({ type })

  return (
    <div className="location-card">
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Residents: {residents.length}</p>
      <div className="location-type" style={{ backgroundColor: `${locationColor}` }}/>
    </div>
  )
}

export default LocationCard
