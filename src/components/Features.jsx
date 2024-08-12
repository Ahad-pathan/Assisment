import React from 'react';
import '../App.css'; // Ensure you have the corresponding CSS for styling

const Features = () => {
  return (
    <div className="features">
      <div className="features__box">

        <div className="features__list">

          <div className="features__item features__item--s1">
            <div className="features__item-cover">
              <svg className="ico-svg ico-svg__s1 features__item-ico">
                <use xlinkHref="/images/icons.svg#s1"></use>
              </svg>
            </div>
            <div className="features__item-box">
              <div className="features__item-title">No more designer anxiety</div>
              <div className="features__item-note">Get your logo instantly, not in weeks.</div>
            </div>
          </div>

          <div className="features__item features__item--s2">
            <div className="features__item-cover">
              <svg className="ico-svg ico-svg__s2 features__item-ico">
                <use xlinkHref="/images/icons.svg#s2"></use>
              </svg>
            </div>
            <div className="features__item-box">
              <div className="features__item-title">Need a tweak to your design?</div>
              <div className="features__item-note">We’ll do it for you, absolutely free</div>
            </div>
          </div>

          <div className="features__item features__item--s3">
            <div className="features__item-cover">
              <svg className="ico-svg ico-svg__s3 features__item-ico">
                <use xlinkHref="/images/icons.svg#s3"></use>
              </svg>
            </div>
            <div className="features__item-box">
              <div className="features__item-title">No monthly charges</div>
              <div className="features__item-note">Pay once, get access to our branding tools forever.</div>
            </div>
          </div>

          <div className="features__item features__item--s4">
            <div className="features__item-cover">
              <svg className="ico-svg ico-svg__s4 features__item-ico">
                <use xlinkHref="/images/icons.svg#s4"></use>
              </svg>
            </div>
            <div className="features__item-box">
              <div className="features__item-title">Full copyright included</div>
              <div className="features__item-note">For use in commercial and personal projects</div>
            </div>
          </div>

          <div className="features__item features__item--s5">
            <div className="features__item-cover">
              <svg className="ico-svg ico-svg__s5 features__item-ico">
                <use xlinkHref="/images/icons.svg#s5"></use>
              </svg>
            </div>
            <div className="features__item-box">
              <div className="features__item-title">Unlimited revisions</div>
              <div className="features__item-note">Modify your logo at any time, even after purchase</div>
            </div>
          </div>

        </div>

        <div className="features__action">
          <div className="features__action-title">Create your unique logo design</div>
          <div className="features__action-note">generate unlimited logos for free</div>

          <a 
            className="features__action-btn ui-btn ui-btn--size-normal ui-btn--theme-normal ui-btn--skin-normal"
            
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="ui-btn__box">Create my logo</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Features;
