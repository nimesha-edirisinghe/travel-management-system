import React, { useEffect } from 'react';
import './HomePage.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MyInputWithIcon, MyDatePicker } from 'app/components';
import LargeFillButton from 'app/components/MyButtons/LargeFillButton';
import OutlineButton from 'app/components/MyButtons/OutlineButton';
import BookingSection from './components/BookingSection';
import WelcomeSection from './components/WelcomeSection';
import ServiceSection from './components/ServiceSection';
import FunFactSection from './components/FunFactSection';
import CallSection from './components/CallSection';
import PackagesSection from './components/PackagesSection';
import BenefitsSection from './components/BenefitsSection';
import DriverSection from './components/DriverSection';

const HomePage = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="home-page">
      <div className="home-navbar" />

      <div className="home-body-content">
        <div className="home-slider-section" />
        <div className="home-booking-section">
          <BookingSection />
        </div>
        <div className="home-welcome-section">
          <WelcomeSection />
        </div>
        <div className="home-service-section">
          <ServiceSection />
        </div>
        <div className="home-fun-facts-section">
          <FunFactSection />
        </div>
        <div className="home-call-section">
          <CallSection />
        </div>
        <div className="home-package-section">
          <PackagesSection />
        </div>
        <div className="home-benefits-section">
          <BenefitsSection />
        </div>
        <div className="home-driver-section">
          <DriverSection />
        </div>
        <div className="home-taxi-rate-section">taxi rates</div>
        <div className="home-news-and-update-section">news and update</div>
        <div className="home-advertisement-section">advertisement</div>
        <div className="home-footer-section">footer</div>
      </div>
    </div>
  );
};

export default connect(null, {})(HomePage);
