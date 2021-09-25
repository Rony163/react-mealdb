import React from 'react';
import './Header.css';
import logo from '../../images/logo-small.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;