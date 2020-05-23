import React, { ReactNode } from 'react';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

type Props = {
  children: ReactNode;
};

const MyRow = ({ children, ...rest }) => {
  return <Row {...rest}>{children}</Row>;
};

export default MyRow;
