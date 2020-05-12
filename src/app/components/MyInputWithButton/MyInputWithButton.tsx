import React from 'react';
import './MyInputWithButton.scss';

type Props = {
  placeholder: string;
  btnLabel: string;
};

const MyInputWithButton = ({ placeholder, btnLabel }: Props) => {
  return (
    <div className="input-btn-root">
      <input className="input-field-wrapper" placeholder={placeholder} />
      <div className="input-btn-wrapper">{btnLabel}</div>
    </div>
  );
};

MyInputWithButton.defaultProps = {
  placeholder: 'Enter your Email',
  btnLabel: 'GO',
};

export default MyInputWithButton;
