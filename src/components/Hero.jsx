import React from 'react';
import '../App.css';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__box">
        <div className="hero__box-main">
          <div className="hero__logo">
            <a href="#3" className="hero__logo-link">
              <span className="hero__logo-note hero__logo-note--b">Brand</span>
              <span className="hero__logo-note hero__logo-note--m">Mark</span>
            </a>
          </div>
          <h2 className="hero__title">Create a unique, professional logo for your business</h2>
          <div className="hero__note">
            Kickstart your brand with business card designs, social media graphics, app icons, letter heads and more
          </div>
          <div className="hero__action">
            <a className="hero__action-btn ui-btn ui-btn--size-normal ui-btn--theme-primary ui-btn--skin-normal" href="#3" target="_blank" rel="noopener noreferrer" tabindex="0">
              <span className="ui-btn__box" tabindex="-1">Create my logo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
