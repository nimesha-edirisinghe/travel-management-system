import React from 'react';
import './BenefitCard.scss';

type Props = {
  title: string;
  description: string;
  iconPath: string;
};

const BenefitCard = ({ title, description, iconPath }: Props) => {
  return (
    <div className="benefit-card-root">
      <div className="benefit-icon-wrapper">
        <div className="icon-inner-wrapper">
          <img src={iconPath} alt="" height="65%" width="65%" />
        </div>
      </div>
      <div className="benefit-title-wrapper">{title}</div>
      <div className="benefit-description-wrapper">{description}</div>
      <div className="benefit-text-btn-wrapper">
        <div className="benefit-btn">READ MORE</div>
      </div>
    </div>
  );
};

export default BenefitCard;
