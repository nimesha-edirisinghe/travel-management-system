import React from 'react';
import './HistorySection.scss';

const HistorySection = () => {
  return (
    <div className="history-section-root">
      <div className="history-section-inner-root">
        <div className="history-section-title">Samanala Cabs History</div>
        <div className="history-section-body-wrapper">
          <div className="history-image-wrapper">x</div>
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
