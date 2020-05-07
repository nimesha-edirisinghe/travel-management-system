import React from 'react';
import './WelcomeSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import travelImage from 'app/assets/images/choise-1-1.png';
import videoImage from 'app/assets/images/video-1-1.png';

const WelcomeSection = () => {
  return (
    <div className="home-welcome-root">
      <div className="home-welcome-header-root">
        <div className="home-welcome-top-title">
          Welcome to Samanala Cab company
        </div>
        <div className="home-welcome-main-title">
          Your first choice for traveling anywhere
        </div>
      </div>
      <div className="home-welcome-body-root">
        <div className="body-left-container">
          <div className="image-container">
            <img src={travelImage} alt="" height="100%" width="100%" />
          </div>
        </div>
        <div className="body-right-container">
          <div className="video-container">
            <div className="video-root">
              <div className="description-div">
                We’re specialized in providing a high quality service
              </div>
              <div className="video-div">
                <img src={videoImage} alt="" height="100%" width="100%" />
              </div>
            </div>
          </div>
          <div className="description-container">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected
            humour or random words which don't look even slightly believable. If
            you are going to use a passage of lorem ipsum you need to be sure
            there isn't anything embarrassing.
          </div>
          <div className="divider" />
          <div className="call-container">
            <div className="call-icon-div">
              <div className="call-wrapper">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  size="3x"
                  color="#FFC000"
                />
              </div>
            </div>
            <div className="call-label">Call us now and make your booking</div>
            <div className="number-div">
              <div className="number-wrapper">033 2226 589</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
