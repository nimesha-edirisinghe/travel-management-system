import React from 'react';
import './LoginButton.scss';

type Props = {
  label: string;
};
const LoginButton = ({ label }: Props) => {
  return <div className="login-button-root">{label}</div>;
};

export default LoginButton;
