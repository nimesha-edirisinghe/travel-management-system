import React from 'react';
import './CallSection.scss';
import CallButton from 'app/components/MyButtons/CallButton';

const CallSection = () => {
  return (
    <div className="home-call-section-root">
      <div className="call-container">
        <div className="label-container">
          <div className="main-label">Make a call or fill form</div>
          <div className="sub-label">Call our agent to get a quote.</div>
        </div>
        <div className="btn-container">
          <div className="btn-div">
            <CallButton label="Book Taxi Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSection;
