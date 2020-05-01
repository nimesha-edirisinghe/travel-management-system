import React from 'react';
import './MyBookingImageCard.scss';

type Props = {
  image: string;
  label: string;
  isImportant?: boolean;
  isSelected?: boolean;
};

const MyBookingImageCard = ({
  image,
  label,
  isImportant,
  isSelected,
}: Props) => {
  return (
    <div
      className={isSelected ? 'image-card-root selected' : 'image-card-root'}
    >
      <div className="image-div">
        <img src={image} alt="" />
      </div>
      <div className={isImportant ? 'label-div important' : 'label-div'}>
        {label}
      </div>
    </div>
  );
};

export default MyBookingImageCard;
