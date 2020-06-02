import React from 'react';
import './OfferCard.scss';
import offer1 from 'app/assets/images/offer-1-1.jpg';
import offer2 from 'app/assets/images/offer-1-2.jpg';
import offer3 from 'app/assets/images/offer-1-3.jpg';
import OfferBlockCard from '../OfferBlockCard';

type Props = {};

const OfferCard = () => {
  return (
    <div className="offer-card-root">
      <div className="offer-card-inner-root">
        <div className="offer-card-main-title">Check out our benefits</div>
        <div className="offer-card-sub-title">What we’re offering</div>
        <div className="offer-card-wrapper">
          <div className="offer-card-inner-wrapper">
            <OfferBlockCard
              imageUrl={offer1}
              title="Credit booking"
              description="There are many van of pasage of suffer alteration lipsum is simply free text."
            />
          </div>
          <div className="offer-card-inner-wrapper">
            <OfferBlockCard
              imageUrl={offer2}
              title="Credit booking"
              description="There are many van of pasage of suffer alteration lipsum is simply free text."
            />
          </div>
          <div className="offer-card-inner-wrapper">
            <OfferBlockCard
              imageUrl={offer3}
              title="Credit booking"
              description="There are many van of pasage of suffer alteration lipsum is simply free text."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

OfferCard.defaultProps = {};

export default OfferCard;
