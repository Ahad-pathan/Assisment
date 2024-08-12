import React from 'react';
 // If you are using react-router for internal links
import '../App.css'; // Ensure you have the corresponding CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header__box">

        <h1 className="header__logo">
          <a to="/" className="header__logo-link">
            <span className="header__logo-note header__logo-note--b">Brand</span>
            <span className="header__logo-note header__logo-note--m">Mark</span>
       </a>
        </h1>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href='#' className="header__nav-link">Tools</a>
            </li>
            <li className="header__nav-item">
              <a href='#' className="header__nav-link">Pricing</a>
            </li>
            <li className="header__nav-item">
              <a href='#' className="header__nav-link">Support</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link highlight">Login</a>
            </li>
          </ul>
        </nav>

        <a 
          href="#" 
          className="header__mobile-menu sidebar-toggle" 
          data-toggleclass="sidebar-open" 
          data-target="body"
        >
          <svg className="ico-svg ico-svg__menu">
            <use xlinkHref="/images/icons.svg#menu"></use>
          </svg>
        </a>

      </div>
    </header>
  );
};

export default Header;
