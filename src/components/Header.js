import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="header root__content">
        <div className="header__menu">
            <img src={logo} alt="" className="header__logo"/>
        </div>
        </header>
    )
}

export default Header