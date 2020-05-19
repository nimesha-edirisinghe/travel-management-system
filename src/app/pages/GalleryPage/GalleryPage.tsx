import React from 'react';
import './GalleryPage.scss';
import { MyNavBar } from 'app/components';
import FooterSection from '../HomePage/components/FooterSection';
import AdvertisementSection from '../HomePage/components/AdvertisementSection';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-navbar">
        <MyNavBar />
      </div>
      <div className="gallery-body-content">
        <div className="gallery-header-wrapper" />
        <div className="gallery-content-wrapper">x</div>
        <div className="gallery-add-wrapper">
          <AdvertisementSection />
        </div>
        <div className="gallery-footer-wrapper">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
