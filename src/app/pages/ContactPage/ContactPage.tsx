import React from 'react';
import './ContactPage.scss';
import { MyNavBar } from 'app/components';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-navbar">
        <MyNavBar />
      </div>
    </div>
  );
};

export default ContactPage;
