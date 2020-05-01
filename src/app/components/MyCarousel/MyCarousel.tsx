import React from 'react';
import Carousel from 'antd/lib/carousel';
import 'antd/lib/carousel/style/css';
import './MyCarousel.scss';

const MyCarousel = ({ children, ...rest }) => {
  return <Carousel {...rest}>{children}</Carousel>;
};

MyCarousel.defaultProps = {};

export default MyCarousel;
