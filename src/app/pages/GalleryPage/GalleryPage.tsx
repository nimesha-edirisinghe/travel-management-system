import React from 'react';
import './GalleryPage.scss';
import { MyNavBar, MyRow, MyCol } from 'app/components';
import { ParallaxHover } from 'react-parallax-hover';
import image1 from 'app/assets/images/gallery/_gallery-1.jpg';
import FooterSection from '../HomePage/components/FooterSection';
import AdvertisementSection from '../HomePage/components/AdvertisementSection';
import ImageCard from './components/ImageCard';

const GalleryPage = () => {
  const imageArray = [{ id: 1, path: image1 }];
  return (
    <div className="gallery-page">
      <div className="gallery-navbar">
        <MyNavBar />
      </div>
      <div className="gallery-body-content">
        <div className="gallery-header-wrapper" />
        <div className="gallery-content-wrapper">
          <MyRow gutter={[20, 20]}>
            <MyCol span={12}>
              <div className="gallery-card-root">
                <ParallaxHover width="100%" height="100%" rotation={7}>
                  <ImageCard
                    path={image1}
                    mainTitle="HOW OFTEN IS A TAXI USED"
                  />
                </ParallaxHover>
              </div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            {/* <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol>
            <MyCol span={12}>
              <div className="gallery-card-root">col-6</div>
            </MyCol> */}
          </MyRow>
        </div>
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
