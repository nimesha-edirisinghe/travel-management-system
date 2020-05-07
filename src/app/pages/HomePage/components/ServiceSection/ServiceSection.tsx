import React from 'react';
import './ServiceSection.scss';
import firstCard from 'app/assets/images/_services-1.png';
import secondCard from 'app/assets/images/_services-2.png';
import thirdCard from 'app/assets/images/_services-3.png';
import fourthCard from 'app/assets/images/_services-4.png';
import ServiceCard from './components/ServiceCard';

const ServiceSection = () => {
  return (
    <div className="home-service-root">
      <div className="service-inner-container">
        <div className="main-header-container">welcome</div>
        <div className="sub-header-container">OUR SERVICES</div>
        <div className="service-body">
          <div className="service-card-wrapper">
            <ServiceCard
              image={firstCard}
              title="RAPID CITY TRANSFER"
              description="We will bring you quickly and comfortably to anywhere in your city"
            />
          </div>
          <div className="service-vertical-divider" />
          <div className="service-card-wrapper">
            <ServiceCard
              image={secondCard}
              title="BOOKING A HOTEL"
              description="If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address"
            />
          </div>
          <div className="service-vertical-divider" />
          <div className="service-card-wrapper">
            <ServiceCard
              image={thirdCard}
              title="AIRPORT TRANSFER"
              description="We will bring you quickly and comfortably to anywhere in your city"
            />
          </div>
          <div className="service-vertical-divider" />
          <div className="service-card-wrapper">
            <ServiceCard
              image={fourthCard}
              title="BAGGAGE TRANSPORT"
              description="If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
