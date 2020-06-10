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
            <div className="content-wrapper">x</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HistorySection.defaultProps = {};

export default HistorySection;
