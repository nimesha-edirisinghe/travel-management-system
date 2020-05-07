import React from 'react';
import './FunFactCard.scss';

type Props = {
  imagePath: string;
  count: number;
  label: string;
};

const FunFactCard = ({ imagePath, count, label }: Props) => {
  return (
    <div className="fun-fact-section-card-root">
      <div className="fun-fact-card-icon-container">
        <div className="icon-container">
          <img src={imagePath} alt="" height="100%" width="100%" />
        </div>
      </div>
      <div className="fun-fact-card-number-container">{count}</div>
      <div className="fun-fact-card-label-container">{label}</div>
    </div>
  );
};

export default FunFactCard;
