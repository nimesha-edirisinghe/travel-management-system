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

const HomePage = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="home-page">
      <div className="home-navbar" />

      <div className="home-body-content">
        <div className="slider-section" />
        <div className="booking-section">
          <BookingSection />
        </div>
        <div className="service-section">service</div>
        <div className="package-section">package</div>
        <div className="benefits-section">benefits</div>
        <div className="driver-section">driver</div>
        <div className="client-section">client</div>
        <div className="advertisement-section">advertisement</div>
        <div className="footer-section">footer</div>
      </div>
    </div>
  );
};

export default connect(null, {})(HomePage);
