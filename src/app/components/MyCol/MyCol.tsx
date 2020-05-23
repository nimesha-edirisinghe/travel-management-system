import React, { ReactNode } from 'react';
import Col from 'antd/lib/col';

type Props = {
  children: ReactNode;
  rest: any;
};

const MyCol = ({ children, ...rest }) => {
  return <Col {...rest}>{children}</Col>;
};

export default MyCol;
