import spinImage from '../../assets/images/portal-loading.png'
import './styles/Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
  <img src={spinImage} alt="Loading" className="image-loader" />
  </div>
  )
}

export default Loader
