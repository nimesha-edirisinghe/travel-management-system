import React, { ReactNode } from 'react';
import Carousel from 'antd/lib/carousel';
import 'antd/lib/carousel/style/css';

type Props = {
  children: ReactNode;
};

const MyCarousel = ({ children, ...rest }: Props) => {
  return <Carousel {...rest}>{children}</Carousel>;
};

MyCarousel.defaultProps = {};

export default MyCarousel;
