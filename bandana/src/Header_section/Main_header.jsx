import React from 'react'
import Logo from './Logo'

import Header_navbar from './Header_navbar'
import './Header-css/main-header.css'

function Main_header() {
    return (
        <div className="main-header">
            <header>
                <Logo />

                <Header_navbar />
            </header>
        </div>

    )
}

export default Main_header
