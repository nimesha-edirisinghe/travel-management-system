import React, { useEffect } from 'react';
import './HomePage.scss';
import { connect } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MyCarousel, MyNavBar } from 'app/components';
import sliderImage1 from 'app/assets/images/slider-1-1.jpg';
import sliderImage2 from 'app/assets/images/slider-1-2.jpg';
import sliderImage3 from 'app/assets/images/slider-3.jpg';
import BookingSection from './components/BookingSection';
import WelcomeSection from './components/WelcomeSection';
import ServiceSection from './components/ServiceSection';
import FunFactSection from './components/FunFactSection';
import CallSection from './components/CallSection';
import PackagesSection from './components/PackagesSection';
import BenefitsSection from './components/BenefitsSection';
import DriverSection from './components/DriverSection';
import RatesSection from './components/RatesSection';
import NewsSection from './components/NewsSection';
import AdvertisementSection from './components/AdvertisementSection';
import FooterSection from './components/FooterSection';

const HomePage = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="home-page">
      <div className="home-navbar">
        <MyNavBar />
      </div>

      <div className="home-body-content">
        <div className="home-slider-section">
          <MyCarousel autoplay>
            <div>
              <img
                src={sliderImage1}
                alt=""
                height="50%"
                className="carousal-content-wrapper"
              />
              <h3>GET TAXI</h3>
            </div>
            <div>
              <img
                src={sliderImage2}
                alt=""
                height="50%"
                className="carousal-content-wrapper"
              />
            </div>
            <div>
              <img
                src={sliderImage3}
                alt=""
                height="50%"
                className="carousal-content-wrapper"
              />
            </div>
          </MyCarousel>
        </div>
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
        <div className="home-taxi-rate-section">
          <RatesSection />
        </div>
        <div className="home-news-and-update-section">
          <NewsSection />
        </div>
        <div className="home-advertisement-section">
          <AdvertisementSection />
        </div>
        <div className="home-footer-section">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default connect(null, {})(HomePage);
