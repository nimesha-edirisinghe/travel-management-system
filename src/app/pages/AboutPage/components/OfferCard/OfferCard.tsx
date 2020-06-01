import React from 'react';
import './OfferCard.scss';
import OfferBlockCard from '../OfferBlockCard';

type Props = {};

const OfferCard = () => {
  return (
    <div className="offer-card-root">
      <div className="offer-card-inner-root">
        <div className="offer-card-main-title">main title</div>
        <div className="offer-card-sub-title">sub title</div>
        <div className="offer-card-wrapper">
          <div className="offer-card-inner-wrapper">
            <OfferBlockCard />
          </div>
          <div className="offer-card-inner-wrapper">x</div>
          <div className="offer-card-inner-wrapper">x</div>
        </div>
      </div>
    </div>
  );
};

OfferCard.defaultProps = {};

export default OfferCard;
