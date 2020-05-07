import React, { useState } from 'react';
import './BookingSection.scss';
import MyBookingImageCard from 'app/components/MyBookingImageCard';
import firstCar from 'app/assets/images/_icon-car-1.png';
import secondCar from 'app/assets/images/_icon-car-2.png';
import thirdCar from 'app/assets/images/_icon-car-3.png';
import fourthCar from 'app/assets/images/_icon-car-4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { MyInputWithIcon, MyDatePicker } from 'app/components';
import LargeFillButton from 'app/components/MyButtons/LargeFillButton';

const BookingSection = () => {
  const [state, setState] = useState({
    isClickFirstCar: false,
    isClickSecondCar: false,
    isClickThirdCar: false,
    isClickFourthCar: false,
  });

  const onPressCar = (first, second, third, fourth) => {
    setState({
      isClickFirstCar: first,
      isClickSecondCar: second,
      isClickThirdCar: third,
      isClickFourthCar: fourth,
    });
  };
  return (
    <div className="booking-section-root">
      <div className="icon-bar">
        <div className="icon-inner-wrapper">
          <div
            className="first-icon-div"
            onClick={() => onPressCar(true, false, false, false)}
          >
            <MyBookingImageCard
              image={firstCar}
              label="standard"
              isSelected={state.isClickFirstCar}
            />
          </div>
          <div
            className="second-icon-div"
            onClick={() => onPressCar(false, true, false, false)}
          >
            <MyBookingImageCard
              image={secondCar}
              label="business"
              isSelected={state.isClickSecondCar}
            />
          </div>
          <div
            className="third-icon-div"
            onClick={() => onPressCar(false, false, true, false)}
          >
            <MyBookingImageCard
              image={thirdCar}
              label="vip"
              isImportant={true}
              isSelected={state.isClickThirdCar}
            />
          </div>
          <div
            className="fourth-icon-div"
            onClick={() => onPressCar(false, false, false, true)}
          >
            <MyBookingImageCard
              image={fourthCar}
              label="bus-minivan"
              isSelected={state.isClickFourthCar}
            />
          </div>
        </div>
      </div>
      <div className="input-item-bar">
        <div className="input-item-inner-wrapper">
          <div className="first-input-item-div">
            <MyInputWithIcon
              icon={
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  color="#CCCCCC"
                />
              }
              placeHolder="From Address.."
            />
          </div>
          <div className="second-input-item-div">
            <MyInputWithIcon
              icon={
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  color="#CCCCCC"
                />
              }
              placeHolder="To.."
            />
          </div>
          <div className="third-input-item-div">
            <MyInputWithIcon
              icon={
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="#CCCCCC" />
              }
              placeHolder="Phone Number"
            />
          </div>
          <div className="fourth-input-item-div">
            <MyDatePicker />
          </div>
        </div>
      </div>
      <div className="button-bar">
        <div className="button-inner-wrapper">
          <LargeFillButton label="GET TAXI" type={1} />
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
