import React from 'react'
import './BrowseContent.css'
import { steps } from '../../assets/assets'
import Steps from '../Steps/Steps'

const BrowseContent = () => {
  return (
    <div className='browse'>
      <div className="first">
        <div className="one">
            <h2>Browse a Car From your Home in These Simple Steps</h2>
            <p>Hassle Free, Seamless Process on our Platform</p>
        </div>
        <div className="two">
            <p>Revolutionize the way you shop for cars with our hassle-free online platform. Say goodbye to tedious showroom visits and endless negotiations - our intuitive interface makes browsing, selecting, and purchasing your dream car a breeze.</p>
            <a href="#" className='btn'>Explore Now</a>
        </div>
      </div>
      <div className="second">
        {
            steps.map((steps, index)=>{
                return (
                    <Steps {...steps} key={index}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default BrowseContent
