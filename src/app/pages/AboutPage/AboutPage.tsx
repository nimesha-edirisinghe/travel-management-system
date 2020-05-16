import React from 'react';
import './AboutPage.scss';
import { MyNavBar } from 'app/components';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-navbar">
        <MyNavBar />
      </div>
    </div>
  );
};

export default AboutPage;
