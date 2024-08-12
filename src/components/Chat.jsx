import React from 'react';
import '../App.css'; // Ensure you have the corresponding CSS for styling

const chatItems = [
  {
    userPic: '/images/userpic1.png',
    userPicSet: '/images/userpic4@2x.png 2x',
    note: 'Can you put the icon on a hexagonal container, change the text to green, and also remove the tagline',
    extra: null
  },
  {
    userPic: '/images/userpic5.png',
    userPicSet: '/images/userpic5@2x.png 2x',
    note: (
      <div className="chat__list-item-extra">
        <img
          src="/images/la.png"
          srcSet="/images/la@2x.png 2x"
          alt="Monkspace"
          className="chat__list-item-extra-img"
        />
        <div className="chat__list-item-txt">
          Sure thing, how does this look?
        </div>
      </div>
    ),
    extra: true
  }
];

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__box">
        <div className="chat__box-line">
          <div className="chat__main">
            <div className="chat__main-title">
              The only logo maker with free customization
            </div>
            <div className="chat__main-note">
              We’ll personally help you customize your logo with the purchase of any package.
            </div>
          </div>
          <div className="chat__phone">
            <div className="chat__list">
              {chatItems.map((item, index) => (
                <div
                  key={index}
                  className={`chat__list-item ${item.extra ? 'chat__list-item--s2' : 'chat__list-item--s1'}`}
                >
                  <img
                    src={item.userPic}
                    srcSet={item.userPicSet}
                    alt={item.extra ? 'Jack' : 'customer'}
                    className="chat__list-item-userpic"
                  />
                  <div className="chat__list-item-note">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;