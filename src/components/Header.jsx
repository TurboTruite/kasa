import React from "react";
import logo from '../assets/logo.png'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='logo Kasa'></img>
            <div className='navbar'>
                <a href='./'>Accueil</a>
                <a href='./about'>A Propos</a>
            </div>
        </div>
    )
}

export default Header;