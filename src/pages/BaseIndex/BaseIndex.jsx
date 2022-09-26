import React from 'react'
import { Link } from 'react-router-dom'
import characterImage from '../../assets/images/rick-and-morty-characters.webp'
import episodesImage from '../../assets/images/rick-and-morty-episodes.jpg'
import locationImage from '../../assets/images/locations.png'
import { BaseCard } from '../../components/BaseCard'
import { MainRoutes } from '../../router/routes/base'
import './styles/BaseIndex.css'
import { PageContainer } from '../../components'

const BaseIndex = () => {
  return (
    <PageContainer>
      <div className='item-container'>
        <Link to={MainRoutes.CHARACTERS}>
          <BaseCard image={characterImage} title='Characters' />
        </Link>
        <Link to={MainRoutes.LOCATIONS}>
          <BaseCard image={locationImage} title='Locations' />
        </Link>
        <Link to={MainRoutes.EPISODES}>
          <BaseCard image={episodesImage} title='Episodes' />
        </Link>
      </div>
    </PageContainer>
  )
}

export default BaseIndex
