import React from 'react'
import '../styles/header_menu.css'


function Header_menu() {
    return (
        <div className="header-menu">
            <ul className="menu-item">
                <a href="#">Home</a>
            </ul>
            <ul className="menu-item">
                <a href="#">Projects</a>
            </ul>
            <ul className="menu-item">
                <a href="#">Contact</a>
            </ul>
            <ul className="menu-item">
                <img src="/images/profile_picture.jpg" alt="profile picture" />
            </ul>
        </div>
    )
}

export default Header_menu
