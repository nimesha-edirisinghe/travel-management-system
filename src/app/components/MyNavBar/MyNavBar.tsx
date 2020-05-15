import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import './MyNavBar.scss';

const MyNavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top-root">
        <div className="navbar-top-root-inner-wrapper">
          <div className="navbar-top-reg-wrapper">
            <div className="navbar-social-media-wrapper">
              <div className="social-media-inner-wrapper" />
              <div className="social-media-inner-wrapper">x</div>
              <div className="social-media-inner-wrapper">x</div>
              <div className="social-media-inner-wrapper">x</div>
            </div>
          </div>
          <div className="navbar-top-reg-wrapper">
            <div className="logo-wrapper">x</div>
            <div className="logo-name-wrapper">Samanala Cabs</div>
          </div>
          <div className="navbar-top-reg-wrapper">x</div>
        </div>
      </div>
      <div className="navbar-bottom-root">
        <div className="navbar-bottom-main-root">
          <div className="navbar-menu-wrapper">
            <div className="navbar-menu-item">Home</div>
            <NavLink to="/playground" className="navbar-menu-item">
              <div>Gallery</div>
            </NavLink>

            <div className="navbar-menu-item">About</div>
            <div className="navbar-menu-item">Contact</div>
            <div className="navbar-menu-item">Blog</div>
            <div className="navbar-menu-item">My Account</div>
          </div>
          <div className="navbar-call-wrapper">
            <div className="call-icon-wrapper">
              <FontAwesomeIcon icon={faPhoneVolume} size="4x" color="#FFC000" />
            </div>
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
