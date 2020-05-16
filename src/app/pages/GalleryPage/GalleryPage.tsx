import React from 'react';
import './GalleryPage.scss';
import { MyNavBar } from 'app/components';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-navbar">
        <MyNavBar />
      </div>
    </div>
  );
};

export default GalleryPage;
