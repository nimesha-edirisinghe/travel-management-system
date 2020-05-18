import React from 'react';
import './GalleryPage.scss';
import { MyNavBar } from 'app/components';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-navbar">
        <MyNavBar />
      </div>
      <div className="gallery-body-content">
        <div className="gallery-header-wrapper" />
      </div>
    </div>
  );
};

export default GalleryPage;
