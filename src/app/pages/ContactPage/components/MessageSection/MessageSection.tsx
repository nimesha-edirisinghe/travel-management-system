import React from 'react';
import './MessageSection.scss';
import { MyInputWithIcon } from 'app/components';
import MediumButton from 'app/components/MyButtons/MediumButton';

const MessageSection = () => {
  return (
    <div className="message-section-root">
      <div className="message-section-inner-root">
        <div className="message-main-title">Contact with us now</div>
        <div className="message-sub-title">Leave a message</div>
        <div className="message-content-wrapper">
          <div className="content-wrapper-1">
            <div className="input-box-wrapper">
              <MyInputWithIcon placeHolder="Email Address" icon={<div />} />
            </div>
            <div className="input-box-wrapper">
              <MyInputWithIcon placeHolder="Phone" icon={<div />} />
            </div>
          </div>
          <div className="content-wrapper-1">
            <div className="input-box-wrapper">
              <MyInputWithIcon placeHolder="Subject" icon={<div />} />
            </div>
            <div className="input-box-wrapper">
              <MyInputWithIcon placeHolder="From Address.." icon={<div />} />
            </div>
          </div>
          <div className="content-comment-wrapper">
            <MyInputWithIcon placeHolder="Write message" icon={<div />} />
          </div>
          <div className="content-button-wrapper">
            <MediumButton label="Send Message" />
          </div>
        </div>
      </div>
    </div>
  );
};

MessageSection.defaultProps = {};

export default MessageSection;
