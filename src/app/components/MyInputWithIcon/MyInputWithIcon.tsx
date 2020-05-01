import React from 'react';
import './MyInputWithIcon.scss';

type Props = {
  placeHolder: string;
  icon: React.ReactNode;
  onChange?: (value: any) => {};
};

const MyInputWithIcon = ({ placeHolder, icon, onChange }: Props) => {
  return (
    <div className="input-root">
      <div className="input-field">
        <input
          className="input-body"
          placeholder={placeHolder}
          onChange={onChange}
        />
      </div>
      <div className="input-icon">{icon}</div>
    </div>
  );
};

export default MyInputWithIcon;
