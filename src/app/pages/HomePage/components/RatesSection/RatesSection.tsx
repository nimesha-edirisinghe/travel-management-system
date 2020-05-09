import React from 'react';
import './RatesSection.scss';
import RateCard from './components/RateCard';

const RatesSection = () => {
  return (
    <div className="home-rate-section-root">
      <div className="rate-root-wrapper">
        <div className="rate-main-title-wrapper">Our all taxi rates</div>
        <div className="rate-sub-title-wrapper">Check taxi fares</div>
        <div className="rate-card-wrapper">
          <div className="card-inner-wrapper">
            <RateCard
              title="All Taxi fares"
              description="Lorem ipsum dolor sit amet cons adipisci elit."
              firstRateName="Initial charge:"
              firstRateValue="Rs. 200.00"
              secondRateName="Additional Kilometre:"
              secondRateValue="Rs. 300.00"
              thirdRateName="Per 2 minutes in stopped traffic:"
              thirdRateValue="Rs. 250.00"
            />
          </div>
          <div className="card-inner-wrapper">
            <RateCard
              title="Additional fares"
              description="Lorem ipsum dolor sit amet cons adipisci elit."
              firstRateName="Additional fares:"
              firstRateValue="Rs. 200.00"
              secondRateName="4pm to 8pm weekday surcharge:"
              secondRateValue="Rs. 100.00"
              thirdRateName="8pm to 6am night surcharge:"
              thirdRateValue="Rs. 150.00"
            />
          </div>
        </div>
        <div className="rate-description-wrapper">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humour or
          random words which.
        </div>
      </div>
    </div>
  );
};

export default RatesSection;
