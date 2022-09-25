import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './styles/BaseCard.css'

const BaseCard = ({ image, title }) => {
  return (
    <div className="item">
      <div className="item-image-container">
        <img
          className="item-image"
          src={image}
          alt="Rick And Morty item"
        />
      </div>
      <div className="item-title">
        <p>{title}</p>
        <AiOutlineArrowRight className="right-icon" />
      </div>
    </div>
  )
}

export default BaseCard
