import React from 'react';
import './FooterSection.scss';
import { MyInputWithButton } from 'app/components';

const FooterSection = () => {
  return (
    <div className="home-footer-section-root">
      <div className="footer-inner-root">
        <div className="footer-top-wrapper">
          <div className="footer-top-logo">x</div>
          <div className="footer-top-icon-wrapper">x</div>
        </div>
        <div className="footer-horizontal-divider" />
        <div className="footer-bottom-wrapper">
          <div className="card-wrapper-about">
            <div className="card-title-inner-wrapper">About</div>
            <div className="card-body-content">
              There are many vari of pass of lorem ipsum availab but the
              majority have suffered in some form by injected humour or words
            </div>
          </div>
          <div className="card-wrapper-link">
            <div className="card-title-inner-wrapper">Links</div>
            <div className="card-body-content">
              <div className="link-wrapper">Get a Taxi</div>
              <div className="link-wrapper">Our Reviews</div>
              <div className="link-wrapper">Latest News</div>
              <div className="link-wrapper">Contact</div>
            </div>
          </div>
          <div className="card-wrapper-contact">
            <div className="card-title-inner-wrapper">Contact</div>
            <div className="card-body-content">
              <div className="footer-contact-desc">
                No 15. Bauddhaloka Mawatha, Gamapaha, Sri Lanka
              </div>
            </div>
          </div>
          <div className="card-wrapper-newsletter">
            <div className="card-title-inner-wrapper">Newsletter</div>
            <div className="card-body-content">
              <div className="footer-contact-desc">
                Sign up now for our mailing list to get all latest news and
                updates from Samanala Cabs company.
              </div>
              <div className="news-button">
                <MyInputWithButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-inner-bottom-root">x</div>
    </div>
  );
};

export default FooterSection;
