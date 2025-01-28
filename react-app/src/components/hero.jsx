import React from 'react'
import Banner from './banner'
import '../styles/hero.css'

function Hero() {
    return (
        <div className="hero-section">
            <Banner />
            <h1 className='title'>Software Developer</h1>
            <div className="location">
                <img src="/icons/location-icon.svg" alt="location icon" />
                <p className='plain-text'>Madrid, Spain</p>
            </div>
            <p className="plain-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nisl a lectus lacinia scelerisque et ac orci. Curabitur fringilla accumsan urna, eu posuere ex dignissim
            </p>
        </div>
    )
}

export default Hero
