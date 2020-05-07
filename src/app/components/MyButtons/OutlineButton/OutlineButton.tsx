import React from 'react';
import './OutlineButton.scss';

type Props = {
  label: string;
};
const OutlineButton = ({ label }: Props) => {
  return <div className="outline-btn-root">{label}</div>;
};

export default OutlineButton;
