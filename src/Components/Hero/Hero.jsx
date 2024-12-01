import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="content">
                <div className="box1">
                    <h1>Dream Cars Delivered</h1>
                    <span>Your Dream Car Awaits - Online, Anytime!</span>
                    <p>Experience the seamless fusion of convenience and choice with our online car buying platform. Discover an extensive selection of dream cars right at your fingertips, accessible anytime, anywhere.</p>
                    <a href="#" className='btn'>Sign Me Up</a>
                </div>
                <div className="forrow">
                    <div className="box2">
                        <div className="count1">
                            <h1>1,000,000+</h1>
                            <span>Used Cars</span>
                        </div>
                        <div className="count2">
                            <h1>+2K</h1>
                            <span>cars Sold</span>
                        </div>
                        <div className="count3">
                            <h1>175</h1>
                            <span>Car Inventory</span>
                        </div>
                    </div>
                    <div className="box3">
                        <p>Explore Your New Car Now</p>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={assets.carHero} alt="" />
            </div>
        </div>
    )
}

export default Hero
