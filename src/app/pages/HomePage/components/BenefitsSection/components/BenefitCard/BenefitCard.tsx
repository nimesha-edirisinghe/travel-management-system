import React from 'react';
import './BenefitCard.scss';

type Props = {
  title: string;
  description: string;
};

const BenefitCard = ({ title, description }: Props) => {
  return (
    <div className="benefit-card-root">
      <div className="benefit-icon-wrapper">
        <div className="icon-inner-wrapper">x</div>
      </div>
      <div className="benefit-title-wrapper">{title}</div>
      <div className="benefit-description-wrapper">{description}</div>
      <div className="benefit-text-btn-wrapper">
        <p className="benefit-btn">READ MORE</p>
      </div>
    </div>
  );
};

export default BenefitCard;
