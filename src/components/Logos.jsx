import React from 'react';
import '../App.css'; // Ensure you have the corresponding CSS for styling

const logosData = [
  { src: '/images/1.png', srcSet: '/images/>1@2x.png', width: '7.063em' },
  { src: '/images/2.png', srcSet: '/images/>2@2x.png', width: '4.625em' },
  { src: '/images/3.png', srcSet: '/images/>3@2x.png', width: '4.875em' },
  { src: '/images/4.png', srcSet: '/images/>4@2x.png', width: '7.563em' },
  { src: '/images/5.png', srcSet: '/images/>5@2x.png', width: '9.063em' }
];

const Logos = () => {
  return (
    <div className="logos">
      <div className="logos__box">
        <ul className="logos__list">
          {logosData.map((logo, index) => (
            <li key={index} className="logos__item">
              <img
                src={logo.src}
                srcSet={`${logo.srcSet} 2x`}
                style={{ width: logo.width }}
                alt={`logo-${index + 1}`}
                className="logos__img"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Logos;
