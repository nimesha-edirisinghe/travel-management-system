import React from 'react';
import './LargeFillButton.scss';

type Props = {
  label: string;
  type: number;
};

const LargeFillButton = ({ label, type }: Props) => {
  return (
    <div
      className={
        type === 1 ? 'large-button-root type-1' : 'large-button-root type-2'
      }
    >
      {label}
    </div>
  );
};

export default LargeFillButton;
