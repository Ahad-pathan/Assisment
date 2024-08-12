import React, { useState } from "react";

import "../App.css"; 

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`bm-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="bm-sidebar-brand">
        {/* Sidebar Branding */}
        <img
          className="bm-brand-logo"
          src="/images/logo.svg"
          width="160"
          alt="Brand Logo"
        />
        {/* Sidebar Close for Mobile Devices */}
        <div className="ml-auto">
          <button className="bm-close-sidebar" onClick={toggleSidebar}>
            {/* You can include an SVG icon or text for the close button here */}
            <svg className="ico-svg ico-svg__close">
              <use xlinkHref="/images/icons.svg#close"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className="scroll-wrapper bm-sidebar-wrapper js-scrollbar">
        <div className="bm-sidebar-wrapper js-scrollbar scroll-content">
          <ul className="menu">
            <li className="menu-item opened">
              <a href="#" className="open-dropdown menu-link">
                <span className="menu-label">
                  <span className="menu-name">
                    Menu
                    <span className="menu-arrow"></span>
                  </span>
                </span>
                <span className="menu-icon rounded-circle">
                  <i className="icon-placeholder fe fe-more-horizontal"></i>
                </span>
              </a>
              {/* Submenu */}
              <ul className="sub-menu" style={{ display: "block" }}>
                <li className="menu-item">
                  
                    <span className="menu-label">
                      <span className="menu-name">Tools</span>
                    </span>
                    <span className="menu-icon rounded-circle">
                      <i className="icon-placeholder fe fe-box"></i>
                    </span>
                 
                </li>
                <li className="menu-item active">
                  
                    <span className="menu-label">
                      <span className="menu-name">Pricing</span>
                    </span>
                    <span className="menu-icon rounded-circle">
                      <i className="icon-placeholder fe fe-dollar-sign"></i>
                    </span>
               
                </li>
                <li className="menu-item">
                  <a href="mailto:support@brandmark.io" className="menu-link">
                    <span className="menu-label">
                      <span className="menu-name">Support</span>
                    </span>
                    <span className="menu-icon rounded-circle">
                      <i className="icon-placeholder fe fe-mail"></i>
                    </span>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://app.brandmark.io/v3/#login"
                    className="menu-link"
                  >
                    <span className="menu-label">
                      <span className="menu-name">Login</span>
                    </span>
                    <span className="menu-icon rounded-circle">
                      <i className="icon-placeholder fe fe-log-in"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="scroll-element scroll-x">
          <div className="scroll-element_outer">
            <div className="scroll-element_size"></div>
            <div className="scroll-element_track"></div>
            <div className="scroll-bar" style={{ width: "0px" }}></div>
          </div>
        </div>
        <div className="scroll-element scroll-y">
          <div className="scroll-element_outer">
            <div className="scroll-element_size"></div>
            <div className="scroll-element_track"></div>
            <div className="scroll-bar" style={{ height: "0px" }}></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
