import React from 'react';
import './ContactPage.scss';
import { MyNavBar } from 'app/components';
import FooterSection from '../HomePage/components/FooterSection';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-navbar">
        <MyNavBar />
      </div>
      <div className="contact-body-content">
        <div className="contact-header-wrapper">header</div>
        <div className="contact-map-wrapper">map</div>
        <div className="contact-message-wrapper">message</div>
        <div className="contact-footer-wrapper">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
