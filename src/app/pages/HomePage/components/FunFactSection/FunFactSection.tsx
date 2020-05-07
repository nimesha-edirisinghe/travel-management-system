import React from 'react';
import './FunFactSection.scss';
import speedometer from 'app/assets/images/_speedometer.png';
import group from 'app/assets/images/_group.png';
import taxi from 'app/assets/images/_taxi.png';
import smileys from 'app/assets/images/_smileys.png';

import FunFactCard from './components/FunFactCard';

const FunFactSection = () => {
  return (
    <div className="home-funfact-root">
      <div className="fun-fact-container">
        <div className="fact-main-header">Our fun facts</div>
        <div className="fact-sub-header">Numbers speak</div>
        <div className="fact-body-container">
          <div className="fact-card-div">
            <FunFactCard
              imagePath={speedometer}
              count={8700}
              label="KM Driven"
            />
          </div>
          <div className="fact-card-div">
            <FunFactCard
              imagePath={group}
              count={4500}
              label="People Dropped"
            />
          </div>
          <div className="fact-card-div">
            <FunFactCard imagePath={taxi} count={120} label="Taxis & Drivers" />
          </div>
          <div className="fact-card-div">
            <FunFactCard
              imagePath={smileys}
              count={1450}
              label="Happy People"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactSection;
