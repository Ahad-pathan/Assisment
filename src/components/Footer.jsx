import React from 'react';
import '../App.css'; // Ensure you have the corresponding CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__row">
          <div className="footer__section">
            <a 
              href='#'
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__section-title footer__section-title--style1"
            >
              Create your logo
            </a>
            <div className="footer__section-note">
              Try Brandmark for free, no account needed
            </div>
          </div>

          <div className="footer__section">
            <a 
              href='#'
              className="footer__section-title footer__section-title--style3"
            >
              Support
            </a>
            <div className="footer__section-note">
              Have questions or need help? Start here.
            </div>
          </div>

          <div className="footer__section">
            <a 
             href='#'
              className="footer__section-title footer__section-title--style2"
            >
              Tools
            </a>
            <div className="footer__section-note">
              Check out our free tools for color, font, and logo design
            </div>
          </div>

          <div className="footer__section">
            <a 
              href='#'
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__section-title"
              style={{ color: '#8e999b', marginRight: '3em' }}
            >
              Terms of service
            </a>
          </div>

          <div className="footer__section">
            <a 
             href='#'
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__section-title" 
              style={{ color: '#8e999b' }}
            >
              Privacy policy
            </a>
          </div>
        </div>

        <div className="footer__decor">
          <div className="footer__decor-item footer__decor-item--s1"></div>
          <div className="footer__decor-item footer__decor-item--s2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
