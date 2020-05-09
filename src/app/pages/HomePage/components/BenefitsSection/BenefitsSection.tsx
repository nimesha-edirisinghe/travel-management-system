import React from 'react';
import './BenefitsSection.scss';
import insurance from 'app/assets/images/home-benefit/_insurance.png';
import seatBelt from 'app/assets/images/home-benefit/_seatbelt.png';
import pen from 'app/assets/images/home-benefit/_pen.png';
import BenefitCard from './components/BenefitCard';

const BenefitsSection = () => {
  return (
    <div className="home-benefits-section-root">
      <div className="benefits-inner-root">
        <div className="benefits-main-title-wrapper">
          Samanala Cabs benefit list
        </div>
        <div className="benefits-sub-title-wrapper">Why choose us</div>
        <div className="benefits-card-wrapper">
          <div className="benefits-card-inner-wrapper">
            <BenefitCard
              title="Safety Guarantee"
              description="Lorem ipsum dolor sit amet
cons adipisci elit vehicula est
non lac at quam."
              iconPath={insurance}
            />
          </div>
          <div className="vertical-divider" />
          <div className="benefits-card-inner-wrapper">
            <BenefitCard
              title="DBS Cleared Drivers"
              description="Lorem ipsum dolor sit amet
cons adipisci elit vehicula est
non lac at quam."
              iconPath={seatBelt}
            />
          </div>
          <div className="vertical-divider" />
          <div className="benefits-card-inner-wrapper">
            <BenefitCard
              title="Free Quotation"
              description="Lorem ipsum dolor sit amet
cons adipisci elit vehicula est
non lac at quam."
              iconPath={pen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
