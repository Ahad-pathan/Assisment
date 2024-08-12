import React from 'react';
import '../App.css'; // Ensure you have the corresponding CSS for styling

const creationsData = [
  { id: 1, src: '/images/i0.svg', alt: 'CIELA MONTESSORI' },
  { id: 2, src: '/images/i2.jpg', srcSet: '/images/i2@2x.jpg 2x', alt: 'No BS' },
  { id: 3, src: '/images/i1.svg', alt: 'The Local Know' },
  { id: 4, src: '/images/i2.svg', alt: 'YOUTUI' },
  { id: 5, src: '/images/i3.svg', alt: 'Monkspace' },
  { id: 6, src: '/images/i4.svg', alt: 'COCO' },
  { id: 7, src: '/images/i5.svg', alt: 'funfit' },
  { id: 8, src: '/images/i6.svg', alt: 'GOOMOE' },
  { id: 9, src: '/images/i7.svg', alt: 'Wooly Waif' },
  { id: 10, src: '/images/i8.svg', alt: 'PathBase' },
  { id: 11, src: '/images/i9.svg', alt: 'BENSON' },
  { id: 12, src: '/images/i10.svg', alt: 'Lizzty' },
  { id: 13, src: '/images/i12.svg', alt: 'lighten' },
  { id: 14, src: '', alt: '', empty: true }, // Empty item
  { id: 15, src: '/images/i11.svg', alt: 'COLONETICS' },
  { id: 16, src: '', alt: '', empty: true } // Empty item
];

const Creations = () => {
  return (
    <section className="creations">
      <div className="creations__box">
        <div className="creations__list">
          <div className="creations__item creations__item--info">
            <div className="creations__main">
              <div className="creations__main-title">Latest customer creations</div>
              <div className="creations__main-note">
                See why over 108,704 users have created a logo with Brandmark.io
              </div>
            </div>
          </div>
          {creationsData.map(item => (
            <div
              key={item.id}
              className={`creations__item creations__item--s${item.id}`}
            >
              {item.src ? (
                <img
                  className="creations__item-img"
                  src={item.src}
                  srcSet={item.srcSet}
                  alt={item.alt}
                />
              ) : (
                <div className="creations__item-empty" /> // Empty item placeholder
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;
