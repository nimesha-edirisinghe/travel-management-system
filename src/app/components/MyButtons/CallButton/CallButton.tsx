import React from 'react';
import './CallButton.scss';

type Props = {
  label: string;
};
const CallButton = ({ label }: Props) => {
  return <div className="call-button-root">{label}</div>;
};

export default CallButton;
