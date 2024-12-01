import React from 'react'
import './Explore.css'
import { cars } from '../../assets/assets'
import CarCards from '../CarCards/CarCards'

const Explore = () => {
  return (
    <div className='explore'>
      {
        cars.map((cars) => {
          return (
            <CarCards {...cars} />
          )
        })
      }
      <div className="explore-card">
        <h2>Explore Your Future Car</h2>
        <p>With our intuitive online platform, explore a vast selection of vehicles, personalize your options, and complete your purchase securely. all from the comfort of your own home.</p>
        <a href="#" className='btn'>See More →</a>
      </div>
    </div>
  )
}

export default Explore
