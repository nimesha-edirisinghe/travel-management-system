import React from 'react';
import './MediumButton.scss';

type Props = {
  label: string;
};

const MediumButton = ({ label }: Props) => {
  return <div className="medium-button-root">{label}</div>;
};

export default MediumButton;
