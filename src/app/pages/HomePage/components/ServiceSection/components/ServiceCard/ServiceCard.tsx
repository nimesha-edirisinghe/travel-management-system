import React from 'react';
import './ServiceCard.scss';

type Props = {
  image: string;
  title: string;
  description: string;
};

const ServiceCard = ({ image, title, description }: Props) => {
  return (
    <div className="home-service-card-root">
      <div className="image-container">
        <div className="image-wrapper">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="title-container">{title}</div>
      <div className="description-container">{description}</div>
    </div>
  );
};

export default ServiceCard;
