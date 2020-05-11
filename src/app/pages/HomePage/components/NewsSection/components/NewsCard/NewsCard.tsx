import React from 'react';
import './NewsCard.scss';

type Props = {
  imagePath: string;
  uploadedBy: string;
  numberOfComments: number;
  uploadedDate: string;
  description: string;
};

const NewsCard = ({
  imagePath,
  uploadedBy,
  numberOfComments,
  uploadedDate,
  description,
}: Props) => {
  return (
    <div className="news-card-main-root">
      <div className="news-card-main-container">
        <div className="news-card-image">
          <img src={imagePath} alt="" height="100%" width="100%" />
        </div>
        <div className="news-card-details">
          <div className="news-card-details-wrapper">
            <div className="news-date-wrapper">{uploadedDate}</div>
          </div>
          <div className="news-card-details-wrapper">By {uploadedBy}</div>
          <div className="news-card-details-wrapper">
            {numberOfComments} comments
          </div>
        </div>
      </div>
      <div className="news-card-sub-container">{description}</div>
    </div>
  );
};

export default NewsCard;
