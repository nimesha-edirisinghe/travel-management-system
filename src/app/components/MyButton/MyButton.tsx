import React, { ReactNode } from 'react';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

type Props = {
  children: ReactNode;
};

const MyButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default MyButton;
