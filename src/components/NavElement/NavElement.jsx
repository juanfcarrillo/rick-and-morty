import React from 'react'
import { Link } from 'react-router-dom'
import './styles/NavElement.css'

const NavElement = ({ Icon, content, to }) => {
  return (
    <Link className='nav-element' to={to}>
      <div className="nav-element-container">
        <p className="nav-element-content">{content}</p>
        {Icon}
      </div>
    </Link>
  )
}

export default NavElement
