import React from 'react';
import './MyNavBar.scss';

const MyNavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top-root">x</div>
      <div className="navbar-bottom-root">
        <div className="navbar-bottom-main-root">
          <div className="navbar-menu-wrapper">x</div>
          <div className="navbar-call-wrapper">
            <div className="call-icon-wrapper">x</div>
            <div className="call-number-wrapper">
              <div className="call-number-inner-wrapper">033 2226 589</div>
              <div className="call-name-inner-wrapper">Phone line</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavBar;
