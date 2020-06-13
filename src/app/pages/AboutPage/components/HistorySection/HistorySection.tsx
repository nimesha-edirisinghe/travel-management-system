import React from 'react';
import Slider from 'react-animated-slider';
import { ChevronRight, ChevronLeft } from 'react-feather';
import 'react-animated-slider/build/horizontal.css';
import image1 from 'app/assets/images/gallery/_gallery-1.jpg';
import image2 from 'app/assets/images/gallery/_gallery-2.jpg';
import image3 from 'app/assets/images/gallery/_gallery-3.jpg';
import './HistorySection.scss';

const HistorySection = () => {
  const content = [
    {
      title: 'title1',
      path: image1,
    },
    {
      title: 'title2',
      path: image2,
    },
    {
      title: 'title3',
      path: image3,
    },
  ];
  return (
    <div className="history-section-root">
      <div className="history-section-inner-root">
        <div className="history-section-title">Samanala Cabs History</div>
        <div className="history-section-body-wrapper">
          <div className="history-image-wrapper">
            <Slider
              infinite={false}
              previousButton={<ChevronLeft size={30} color="#ffffff" />}
              nextButton={<ChevronRight size={30} color="#ffffff" />}
            >
              {content.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    height: '110%',
                    width: '100%',
                  }}
                >
                  <img
                    src={item.path}
                    alt={item.title}
                    height="100%"
                    width="100%"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="history-root-wrapper">
            <div className="history-body-title-wrapper">
              How we reached to this level
            </div>
            <div className="subtitle-wrapper">2009</div>
            <div className="content-wrapper">
              <p>
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humour or random words which don't look even slightly
                believable. If you are going to use a passage of lorem ipsum you
                need to be sure there isn't anything embarrassing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HistorySection.defaultProps = {};

export default HistorySection;
