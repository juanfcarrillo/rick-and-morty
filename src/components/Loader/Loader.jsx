import './styles/Loader.css'
import spinImage from '../../assets/images/portal-loading.png'
import { createPortal } from 'react-dom'

const Loader = () => {
  const loaderDOM = document.querySelector('#loader')

  return createPortal(<img src={spinImage} alt="Loading" className='image-loader'/>, loaderDOM)
}

export default Loader
