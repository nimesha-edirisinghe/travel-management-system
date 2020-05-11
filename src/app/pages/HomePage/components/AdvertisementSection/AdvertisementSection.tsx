import React from 'react';
import './AdvertisementSection.scss';
import banner from 'app/assets/images/_banner-1.png';
import CallButton from 'app/components/MyButtons/CallButton';

const AdvertisementSection = () => {
  return (
    <div className="home-add-root">
      <div className="home-add-root-wrapper">
        <div className="add-left-wrapper">
          <div className="left-main-title">Call 24 hour service available</div>
          <div className="left-desc-wrapper">
            Call now and book our taxi for your next ride
          </div>
          <div className="left-btn-wrapper">
            <div className="btn-inner-wrapper">
              <CallButton label="Choose your Taxi" />
            </div>
          </div>
        </div>
        <div className="add-right-wrapper">
          <img src={banner} alt="" height="70%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSection;
