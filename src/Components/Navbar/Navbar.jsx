import React, { useState } from 'react'
import "./Navbar.css"
import { IoSearch } from 'react-icons/io5'
import { Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='navbar'>
            <div className="logo">
                <h2>Carcentro</h2>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Pricing Plan</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="auth">
                <div className="toggle">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <span>
                    <IoSearch />
                </span>
                <a href="#" className="btn">Sign Up</a>
            </div>
            {
                isOpen === true && <div className="responsive-open">
                <div className="links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Pricing Plan</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <a href="#" className="btn">Sign Up</a>
                    </ul>
                </div>
            </div>
            }
        </div>
    )
}

export default Navbar
