import React from 'react';
import './ImageCard.scss';

type Props = {
  path?: string;
  mainTitle?: string;
};

const ImageCard = ({ path, mainTitle }: Props) => {
  return (
    <div className="image-card-root">
      <div className="image-card-image-wrapper">
        <img src={path} width="100%" height="100%" alt="" />
      </div>
      <div className="image-card-main-title">{mainTitle}</div>
      <div className="image-card-bottom-wrapper">
        <div className="image-card-icon-wrapper">x</div>
        <div className="image-card-date-wrapper">x</div>
        <div className="image-card-icon-wrapper">x</div>
        <div className="image-card-like-wrapper">x</div>
        <div className="image-card-icon-wrapper">x</div>
        <div className="image-card-like-wrapper">x</div>
      </div>
    </div>
  );
};

ImageCard.defaultProps = {
  path: '',
  mainTitle: '',
};

export default ImageCard;
