import React from 'react';
import './DriverSection.scss';
import tick from 'app/assets/images/_tick.png';
import sideCar from 'app/assets/images/home-driver/_car-big-side.png';
import MediumButton from 'app/components/MyButtons/MediumButton';

const DriverSection = () => {
  return (
    <div className="home-driver-section-root">
      <div className="driver-section-inner-root">
        <div className="driver-body-content">
          <div className="body-main-title">FOR DRIVERS</div>
          <div className="body-sub-title">DO YOU WANT TO EARN WITH US?</div>
          <div className="body-description">
            Quisque sollicitudin feugiat risus, eu posuere ex euismod eu.
            Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros
            sodales ante, euismod aliquet nulla metus a mauris.
          </div>
          <div className="body-facts-wrapper">
            <div className="fact-inner-wrapper">
              <div className="fact-row">
                <div className="fact-icon-wrapper">
                  <img src={tick} alt="" height="46%" width="50%" />
                </div>
                <div className="fact-content-wrapper">Luxury cars</div>
                <div className="fact-icon-wrapper">
                  <img src={tick} alt="" height="46%" width="50%" />
                </div>
                <div className="fact-content-wrapper">Fixed price</div>
              </div>
              <div className="fact-row">
                <div className="fact-icon-wrapper">
                  <img src={tick} alt="" height="46%" width="50%" />
                </div>
                <div className="fact-content-wrapper">No fee</div>
                <div className="fact-icon-wrapper">
                  <img src={tick} alt="" height="46%" width="50%" />
                </div>
                <div className="fact-content-wrapper">Good application</div>
              </div>
              <div className="fact-row">
                <div className="fact-icon-wrapper">
                  <img src={tick} alt="" height="46%" width="50%" />
                </div>
                <div className="fact-content-wrapper">Weekly payment</div>
                <div className="fact-icon-wrapper">
                  <img src={tick} alt="" height="46%" width="50%" />
                </div>
                <div className="fact-content-wrapper">Stable orders</div>
              </div>
            </div>
          </div>
          <div className="body-button-wrapper">
            <div className="button-inner-wrapper">
              <MediumButton label="Become a Driver" />
            </div>
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
