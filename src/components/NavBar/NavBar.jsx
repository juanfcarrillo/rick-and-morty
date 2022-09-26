import { NavElement } from '../NavElement'
import { NavLogo } from '../NavLogo'
import './styles/NavBar.css'

import { RiAliensFill, RiPagesLine } from 'react-icons/ri'
import { IoLocationSharp } from 'react-icons/io5'
import { SiDatabricks } from 'react-icons/si'
import { IoIosMenu } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { MainRoutes } from '../../router/routes/base'
import { useRef } from 'react'

const NavBar = () => {
  const navRightRef = useRef(null)
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='nav-left'>
          <Link to='/'>
            <NavLogo />
          </Link>
        </div>
        <div
          tabIndex={0}
          onBlur={() => navRightRef.current.classList.remove('active')}
          ref={navRightRef}
          className='nav-right'
        >
          <AiOutlineClose
            className='close-button'
            onClick={() => navRightRef.current.classList.remove('active')}
            fill='white'
          />
          <IoIosMenu
            onClick={() => navRightRef.current.classList.toggle('active')}
            className='hamburger-icon'
            fill='white'
          />
          <SiDatabricks className='menu-icon' fill='white' />
          <NavElement
            content={'Characters'}
            Icon={<RiAliensFill fill='white' />}
            to={`/${MainRoutes.BASE}/${MainRoutes.CHARACTERS}`}
          />
          <NavElement
            content={'Locations'}
            Icon={<IoLocationSharp fill='white' />}
            to={`/${MainRoutes.BASE}/${MainRoutes.LOCATIONS}`}
          />
          <NavElement
            content={'Episodes'}
            Icon={<RiPagesLine fill='white' />}
            to={`/${MainRoutes.BASE}/${MainRoutes.EPISODES}`}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
