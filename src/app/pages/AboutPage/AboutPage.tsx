import React from 'react';
import './AboutPage.scss';
import { MyNavBar } from 'app/components';
import innerBg from 'app/assets/images/_inner-bg.jpg';
import FooterSection from '../HomePage/components/FooterSection';
import AdvertisementSection from '../HomePage/components/AdvertisementSection';
import OfferCard from './components/OfferCard';
import BenefitsSection from '../HomePage/components/BenefitsSection';
import HistorySection from './components/HistorySection';
import AboutInfoSection from './components/AboutInfoSection';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-navbar">
        <MyNavBar />
      </div>
      <div className="about-body-content">
        <div className="about-header-wrapper">
          <img src={innerBg} height="100%" width="100%" alt="" />
        </div>
        <div className="about-info-wrapper">
          <AboutInfoSection />
        </div>
        <div className="about-benefits-wrapper">
          <BenefitsSection />
        </div>
        <div className="about-history-wrapper">
          <HistorySection />
        </div>
        <div className="about-offer-wrapper">
          <OfferCard />
        </div>
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
