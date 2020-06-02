import React from 'react';
import './OfferBlockCard.scss';

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

const OfferBlockCard = ({ imageUrl, title, description }: Props) => {
  return (
    <div className="offer-block-root">
      <div className="offer-block-image">
        <img src={imageUrl} alt="" height="100%" width="100%" />
      </div>
      <div className="offer-block-main-title">{title}</div>
      <div className="offer-block-description">{description}</div>
      <div className="offer-block-btn-wrapper">
        <div className="btn-inner-wrapper">Read more</div>
      </div>
    </div>
  );
};

OfferBlockCard.defaultProps = {
  imageUrl: '',
  title: '',
  description: '',
};

export default OfferBlockCard;
