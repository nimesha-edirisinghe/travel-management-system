import React from 'react';
import './BenefitsSection.scss';
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
            />
          </div>
          <div className="benefits-card-inner-wrapper">x</div>
          <div className="benefits-card-inner-wrapper">x</div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
