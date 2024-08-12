import React, { useState } from 'react';
import '../App.css';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default active index

  const slides = [
    {
      image: '/images/slide1.png',
      image2x: '/images/slide1@2x.png',
      alt: 'Hwear brand design',
      quote: `I was afraid to pay thousands for a logo that didn't turn out right for my business. The Brandmark team helped me create a logo that I love!`,
      userImage: '/images/userpic1.png',
      userImage2x: '/images/userpic1@2x.png',
      userName: 'Sarah Locatelli',
      userPosition: 'Founder, Loctia'
    },
    {
      image: '/images/slide2.png',
      image2x: '/images/slide2@2x.png',
      alt: 'NobleTide brand design',
      quote: 'I tried other logo makers and Brandmark is the best value. Quality is exceptional and includes a complete branding solution for my company',
      userImage: '/images/userpic2.png',
      userImage2x: '/images/userpic2@2x.png',
      userName: 'Courtney Costrino',
      userPosition: 'Founder, Noble Tide LLC'
    },
    {
      image: '/images/slide3.png',
      image2x: '/images/slide3@2x.png',
      alt: 'PubLaw Project brand design',
      quote: `I'm not a designer, when I had to make a logo I found myself staring at a blank screen. Brandmark made the process actually enjoyable`,
      userImage: '/images/userpic3.png',
      userImage2x: '/images/userpic3@2x.png',
      userName: 'Valentyna Kuzmych',
      userPosition: 'CEO, PubLaw Project'
    }
  ];

  const handlePageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider__list" style={{ position: 'relative', overflow: 'hidden', display: 'block', height: '673px' }}>
        {slides.map((slide, index) => (
          <div key={index} className={`slider__item ${activeIndex === index ? 'slider__item--active' : ''}`}>
            <div className="slider__box">
              <div className="slider__box-cover">
                <img
                  className={`slider__box-cover-img slider__box-cover-img--s${index + 1}`}
                  src={slide.image}
                  srcSet={`${slide.image2x} 2x`}
                  alt={slide.alt}
                />
              </div>
              <div className="slider__box-review">
                <div className="slider__box-review-box">
                  <div className="slider__box-review-quote">
                    {slide.quote}
                    <svg className="ico-svg ico-svg__quote">
                      <use xlinkHref="/images/icons.svg#quote"></use>
                    </svg>
                    <svg className="ico-svg ico-svg__quote-r">
                      <use xlinkHref="/images/icons.svg#quote-r"></use>
                    </svg>
                  </div>
                  <div className="slider__box-user">
                    <div className="slider__box-user-in">
                      <img
                        src={slide.userImage}
                        srcSet={`${slide.userImage2x} 2x`}
                        alt={slide.userName}
                        className="slider__box-user-ico"
                      />
                      <div className="slider__box-user-info">
                        <div className="slider__box-user-name">{slide.userName}</div>
                        <div className="slider__box-user-position">{slide.userPosition}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider__page">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slider__page-item ${activeIndex === index ? 'slider__page-item--active' : ''}`}
            data-index={index}
            onClick={() => handlePageClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
