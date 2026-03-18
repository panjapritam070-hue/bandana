import React from 'react'
import './Header-css/navbar.css'
import { Link } from 'react-router'

function Header_navbar() {
    return (
        <>
            <div className='header-navbar'>
                <Link to='/'>
                    <button className='home'>Home</button>
                </Link>
                <Link to='/about'>
                    <button className='about'>About</button>
                </Link>
                <Link to='/businesswithus'>
                    <button className='business-with-us'>Business with Us</button>
                </Link>
                <Link to='/products'>
                    <button className='products'>Products</button>
                </Link>

            </div>

        </>
    )
}

export default Header_navbar
