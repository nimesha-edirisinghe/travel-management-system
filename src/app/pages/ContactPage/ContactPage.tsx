import React from 'react';
import './ContactPage.scss';
import { MyNavBar } from 'app/components';
import innerBg from 'app/assets/images/_inner-bg.jpg';
import FooterSection from '../HomePage/components/FooterSection';
import MessageSection from './components/MessageSection';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-navbar">
        <MyNavBar />
      </div>
      <div className="contact-body-content">
        <div className="contact-header-wrapper">
          <img src={innerBg} height="100%" width="100%" alt="" />
        </div>
        <div className="contact-map-wrapper">map</div>
        <div className="contact-message-wrapper">
          <MessageSection />
        </div>
        <div className="contact-footer-wrapper">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
