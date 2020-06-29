import React, { useState } from 'react';
import './GalleryPage.scss';
import { MyNavBar, MyRow, MyCol } from 'app/components';
import { ParallaxHover } from 'react-parallax-hover';
import image1 from 'app/assets/images/gallery/_gallery-1.jpg';
import image2 from 'app/assets/images/gallery/_gallery-2.jpg';
import image3 from 'app/assets/images/gallery/_gallery-3.jpg';
import image4 from 'app/assets/images/gallery/_gallery-4.jpg';
import innerBg from 'app/assets/images/_inner-bg.jpg';
import FooterSection from '../HomePage/components/FooterSection';
import AdvertisementSection from '../HomePage/components/AdvertisementSection';
import ImageCard from './components/ImageCard';

const GalleryPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const imageArray = [
    {
      id: 1,
      path: image1,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 2,
      path: image2,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 3,
      path: image3,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 4,
      path: image4,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 5,
      path: image1,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 6,
      path: image1,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 7,
      path: image1,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 8,
      path: image1,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 9,
      path: image1,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
    {
      id: 10,
      path: image1,
      mainTitle: 'HOW OFTEN IS A TAXI USED',
      date: 'January 2, 2020',
      likes: '20',
      comments: '10',
    },
  ];
  return (
    <div className="gallery-page">
      <div className="gallery-navbar">
        <MyNavBar />
      </div>
      <div className="gallery-body-content">
        <div className="gallery-header-wrapper">
          <img src={innerBg} height="100%" width="100%" alt="" />
        </div>
        <div className="gallery-content-wrapper">
          <MyRow gutter={[20, 20]}>
            {imageArray.map((image, index) => (
              <MyCol span={12} key={image.id}>
                <div
                  className="gallery-card-root"
                  onClick={() => openLightbox(index)}
                >
                  <ParallaxHover width="100%" height="100%" rotation={7}>
                    <ImageCard
                      path={image.path}
                      mainTitle={image.mainTitle}
                      date={image.date}
                      likes={image.likes}
                      comments={image.comments}
                    />
                  </ParallaxHover>
                </div>
              </MyCol>
            ))}
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
