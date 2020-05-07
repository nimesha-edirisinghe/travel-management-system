import React from 'react';
import './PackageCard.scss';

type Props = {
  imagePath: string;
  title: string;
  rateValue: string;
  mileValue: string;
  passengerValue: string;
};

const PackageCard = ({
  imagePath,
  title,
  rateValue,
  mileValue,
  passengerValue,
}: Props) => {
  return (
    <div className="package-card-main-wrapper">
      <div className="package-card-image-wrapper">
        <div className="image-container">
          <img src={imagePath} alt="" height="100%" width="100%" />
        </div>
      </div>
      <div className="package-card-title-wrapper">{title}</div>
      <div className="package-card-body-wrapper">
        <div className="inner-wrapper">
          <div className="row-wrapper">
            <div className="row-name">Base Rate:</div>
            <div className="row-value">Rs. {rateValue}</div>
          </div>
          <div className="row-wrapper">
            <div className="row-name">Per Mile/KM:</div>
            <div className="row-value">Rs. {mileValue}</div>
          </div>
          <div className="row-wrapper">
            <div className="row-name">Passengers:</div>
            <div className="row-value">{passengerValue}</div>
          </div>
        </div>
      </div>
      <div className="package-card-button-wrapper">
        <div className="button-inner-wrapper">Book Taxi</div>
      </div>
    </div>
  );
};

export default PackageCard;
