import React from 'react';
import './RateCard.scss';
import taxi from 'app/assets/images/_taxi-black.png';
import CallButton from 'app/components/MyButtons/CallButton';

type Props = {
  title: string;
  description: string;
  firstRateName: string;
  firstRateValue: string;
  secondRateName: string;
  secondRateValue: string;
  thirdRateName: string;
  thirdRateValue: string;
};

const RateCard = ({
  title,
  description,
  firstRateName,
  firstRateValue,
  secondRateName,
  secondRateValue,
  thirdRateName,
  thirdRateValue,
}: Props) => {
  return (
    <div className="rate-card-root">
      <div className="rate-card-inner-root">
        <div className="rate-card-top-div">
          <div className="rate-image-wrapper">
            <img src={taxi} alt="" height="80%" width="80%" />
          </div>
          <div className="rate-description-wrapper">
            <div className="title-inner-wrapper">{title}</div>
            <div className="desc-inner-wrapper">{description}</div>
          </div>
        </div>
        <div className="horizontal-divider" />
        <div className="rate-card-body-container">
          <div className="body-inner-wrapper">
            <div className="body-row">
              <div className="rate-name">{firstRateName}</div>
              <div className="rate-value">{firstRateValue}</div>
            </div>
            <div className="body-row">
              <div className="rate-name">{secondRateName}</div>
              <div className="rate-value">{secondRateValue}</div>
            </div>
            <div className="body-row">
              <div className="rate-name">{thirdRateName}</div>
              <div className="rate-value">{thirdRateValue}</div>
            </div>
          </div>
        </div>
        <div className="rate-button-wrapper">
          <div className="rate-btn-inner-wrapper">
            <CallButton label="Order Taxi Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
