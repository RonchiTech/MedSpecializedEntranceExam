import React from 'react';
import logo from '../../assets/images/logo-lmc-white.png';
import './Navigation.scss';
const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navigation-menu">
          <ul className="navigation-menu__list">
            <a href="/">
              <li>HOME</li>
            </a>
            <a href="/">
              <li>ABOUT US</li>
            </a>
            <a href="/">
              <li>CORE FEATURES</li>
            </a>
            <a href="/">
              <li>SOLUTIONS</li>
            </a>
            <a href="/">
              <li>WHAT'S NEW</li>
            </a>
            <a href="/">
              <li>CONTACT US</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
