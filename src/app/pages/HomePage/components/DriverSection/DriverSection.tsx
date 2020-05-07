import React from 'react';
import './DriverSection.scss';
import sideCar from 'app/assets/images/home-driver/_car-big-side.png';

const DriverSection = () => {
  return (
    <div className="home-driver-section-root">
      <div className="driver-section-inner-root">
        <div className="driver-body-content">
          <div className="body-main-title">x</div>
          <div className="body-sub-title">x</div>
          <div className="body-description">x</div>
          <div className="body-facts-wrapper">
            <div className="fact-inner-wrapper">
              <div className="fact-row">
                <div className="fact-icon-wrapper">x</div>
                <div className="fact-content-wrapper">x</div>
                <div className="fact-icon-wrapper">x</div>
                <div className="fact-content-wrapper">x</div>
              </div>
              <div className="fact-row">
                <div className="fact-icon-wrapper">x</div>
                <div className="fact-content-wrapper">x</div>
                <div className="fact-icon-wrapper">x</div>
                <div className="fact-content-wrapper">x</div>
              </div>
              <div className="fact-row">
                <div className="fact-icon-wrapper">x</div>
                <div className="fact-content-wrapper">x</div>
                <div className="fact-icon-wrapper">x</div>
                <div className="fact-content-wrapper">x</div>
              </div>
            </div>
          </div>
          <div className="body-button-wrapper">
            <div className="button-inner-wrapper">x</div>
          </div>
        </div>
        <div className="driver-image-content">
          <img src={sideCar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DriverSection;
