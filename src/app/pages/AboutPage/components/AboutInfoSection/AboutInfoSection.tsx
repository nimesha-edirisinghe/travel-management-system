import React from 'react';
import './AboutInfoSection.scss';
import aboutImage from 'app/assets/images/about-1-1.jpg';
import MediumButton from 'app/components/MyButtons/MediumButton';

const AboutInfoSection = () => {
  return (
    <div className="about-info-root">
      <div className="about-info-inner-root">
        <div className="about-info-main-title">
          Few words about Samanala Cabs
        </div>
        <div className="about-info-body-wrapper">
          <div className="about-info-body-left-wrapper">
            <div className="subtitle-wrapper">Learn about our taxi company</div>
            <div className="description-wrapper">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humour or random words which don't look even slightly believable.
              If you are going to use a passage of lorem ipsum you need to be
              sure there isn't anything embarrassing.
            </div>
            <div className="button-wrapper">
              <MediumButton label="Discover more" />
            </div>
          </div>
          <div className="about-info-body-right-wrapper">
            <img src={aboutImage} alt="about" height="100%" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfoSection;
