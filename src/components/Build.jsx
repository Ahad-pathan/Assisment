import React from 'react';
import '../App.css'; // Ensure you have the corresponding CSS for styling

const buildItems = [
  { icon: 'doc', text: 'Logo design files' },
  { icon: 'profile', text: 'Social profile icons' },
  { icon: 'card', text: 'Business card designs' },
  { icon: 'favicon', text: 'Animated designs' },
  { icon: 'paper', text: 'Letterhead templates' },
  { icon: 'cover', text: 'Social media designs' },
  { icon: 'presentation', text: 'Presentation templates' },
  { icon: 'guide', text: 'Brand guide' }
];

const Build = () => {
  return (
    <div className="build">
      <div className="build__box">
        <div className="build__box-row">
          <div className="build__cover">
            <img
              src="/images/i1.jpg"
              srcSet="/images/i1@2x.jpg 2x"
              className="build__cover-img"
              alt="img"
            />
            <div className="build__cover-decor">
              <svg className="ico-svg ico-svg--planet">
                <use xlinkHref="/images/icons.svg#planet"></use>
              </svg>
            </div>
            <div className="build__cover-decor2"></div>
          </div>
          <div className="build__main">
            <div className="build__main-title">
              Build a beautiful brand on time and on budget
            </div>
            <div className="build__main-note">
              Kickstart your business with thousands of <b>ready-to-use</b> design assets.
            </div>
            <div className="build__main-list">
              {buildItems.map((item, index) => (
                <div key={index} className="build__main-list-item">
                  <div className="build__main-list-item-ico">
                    <svg className={`ico-svg ico-svg__${item.icon}`}>
                      <use xlinkHref={`/images/icons.svg#${item.icon}`}></use>
                    </svg>
                    <div className="build__main-list-item-note">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="build__main-action">
              <a
               
                target="_blank"
                rel="noopener noreferrer"
                className="build__main-action-btn ui-btn ui-btn--size-normal ui-btn--theme-light"
              >
                <span className="ui-btn__box" tabIndex="-1">
                  <svg className="ico-svg ico-svg--out">
                    <use xlinkHref="/images/icons.svg#out"></use>
                  </svg>
                  See example asset
                  </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
