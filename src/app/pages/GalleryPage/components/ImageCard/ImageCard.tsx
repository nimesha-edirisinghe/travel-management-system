import React from 'react';
import { Clock, Heart, MessageCircle } from 'react-feather';
import './ImageCard.scss';

type Props = {
  path?: string;
  mainTitle?: string;
  date?: string;
  likes?: string;
  comments?: string;
};

const ImageCard = ({ path, mainTitle, date, likes, comments }: Props) => {
  return (
    <div className="image-card-root">
      <div className="image-card-image-wrapper">
        <img src={path} width="100%" height="100%" alt="" />
      </div>
      <div className="image-card-main-title">{mainTitle}</div>
      <div className="image-card-bottom-wrapper">
        <div className="image-card-icon-wrapper">
          <Clock size="18px" color="#ffc000" />
        </div>
        <div className="image-card-date-wrapper">{date}</div>
        <div className="image-card-icon-wrapper">
          <Heart size="18px" color="#ffc000" />
        </div>
        <div className="image-card-like-wrapper">{likes}</div>
        <div className="image-card-icon-wrapper">
          <MessageCircle size="18px" color="#ffc000" />
        </div>
        <div className="image-card-like-wrapper">{comments}</div>
      </div>
    </div>
  );
};

ImageCard.defaultProps = {
  path: '',
  mainTitle: '',
  date: '',
  likes: '1',
  comments: '1',
};

export default ImageCard;
