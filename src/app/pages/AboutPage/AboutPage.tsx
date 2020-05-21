import React from 'react';
import './AboutPage.scss';
import { MyNavBar } from 'app/components';
import FooterSection from '../HomePage/components/FooterSection';
import AdvertisementSection from '../HomePage/components/AdvertisementSection';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-navbar">
        <MyNavBar />
      </div>
      <div className="about-body-content">
        <div className="about-header-wrapper">header</div>
        <div className="about-info-wrapper">info</div>
        <div className="about-benefits-wrapper">benefits</div>
        <div className="about-history-wrapper">history</div>
        <div className="about-offer-wrapper">offer</div>
        <div className="about-add-wrapper">
          <AdvertisementSection />
        </div>
        <div className="about-footer-wrapper">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
