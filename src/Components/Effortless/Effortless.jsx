import React from 'react'
import "./Effortless.css"
import { assets } from '../../assets/assets'
import { IoCarSportSharp, IoEnterOutline } from 'react-icons/io5'

const Effortless = () => {
    return (
        <div className='effortless'>
            <div className="img">
                <img src={assets.carInterior} alt="" />
            </div>
            <div className="content">
                <h1>Effortless Car Buying, Right from Your Living Room</h1>
                <p>Experience the ultimate convenience of purchasing your dream car without ever stepping foot outside. With our intuitive online platform, explore a vast selection of vehicles, personalize your options, and complete your purchase securely, all from the comfort of your own home.</p>
                <div className="tout">
                    <div className="one">
                        <IoEnterOutline className='icon' size={56} />
                        <h3>Explore Your New Cars Now</h3>
                        <p>Easy searching with smart machine learning tool</p>
                    </div>
                    <div className="two">
                        <IoCarSportSharp className='icon' size={56} />
                        <h3>Various Selections</h3>
                        <p>From a hatchback to an SUV, we have everything!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Effortless
