import React from 'react';
import './SmallFillButton.scss';

type Props = {
  label: string;
  isSelected: boolean;
};
const SmallFillButton = ({ label, isSelected }: Props) => {
  return (
    <div
      className={
        isSelected ? 'small-button-wrapper selected' : 'small-button-wrapper'
      }
    >
      {label}
    </div>
  );
};

export default SmallFillButton;
