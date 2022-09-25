import { NavElement } from '../NavElement'
import { NavLogo } from '../NavLogo'
import './styles/NavBar.css'

import { RiAliensFill, RiPagesLine } from 'react-icons/ri'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { MainRoutes } from '../../router/routes/base'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
          <Link to="/">
            <NavLogo />
          </Link>
        </div>
        <div className="nav-right">
          <NavElement
            content={'Characters'}
            Icon={<RiAliensFill fill="white" />}
            to={`/${MainRoutes.BASE}/${MainRoutes.CHARACTERS}`}
          />
          <NavElement
            content={'Locations'}
            Icon={<IoLocationSharp fill="white" />}
            to={`/${MainRoutes.BASE}/${MainRoutes.LOCATIONS}`}
          />
          <NavElement
            content={'Episodes'}
            Icon={<RiPagesLine fill="white" />}
            to={`/${MainRoutes.BASE}/${MainRoutes.EPISODES}`}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
