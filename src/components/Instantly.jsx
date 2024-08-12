import React from 'react';
import '../App.css'; // Ensure you have the corresponding CSS for styling

const previewInfos = [
  {
    title: 'Export to all major formats',
    text: 'Including SVG, EPS, PNG and PDF',
    className: 'instantly__preview-info--s1'
  },
  {
    title: 'Adjust text and image size',
    text: 'Perfectly sized for web and print',
    className: 'instantly__preview-info--s2'
  },
  {
    title: 'Easily edit and customize',
    text: 'Double click to edit text',
    className: 'instantly__preview-info--s3'
  }
];

const Instantly = () => {
  return (
    <div className="instantly">
      <div className="instantly__box">
        <div className="instantly__main">
          <div className="instantly__title">Instantly customize and export</div>
          <div className="instantly__note">
            Right in your browser, no designer or software needed
          </div>
        </div>
        <div className="instantly__preview">
          <div className="instantly__preview-box">
            <img
              src="/images/settings.gif"
              alt="img"
              className="instantly__preview-img"
            />
          </div>
          <div className="instantly__preview-note">
            {previewInfos.map((info, index) => (
              <div
                key={index}
                className={`instantly__preview-info ${info.className}`}
              >
                <div className="instantly__preview-title">{info.title}</div>
                <div className="instantly__preview-text">{info.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instantly;
