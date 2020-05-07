import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import './PackagesSection.scss';
import SmallFillButton from 'app/components/MyButtons/SmallFillButton';
import wagonR from 'app/assets/images/home-package/_wagonR.png';
import yaris from 'app/assets/images/home-package/_yaris.jpg';
import axio from 'app/assets/images/home-package/_axio.jpg';
import prius from 'app/assets/images/home-package/_prius.png';
import alto from 'app/assets/images/home-package/_alto.jpg';
import PackageCard from './components/PackageCard';

const PackagesSection = () => {
  const [state, setState] = useState({
    isClickFirstButton: true,
    isClickSecondButton: false,
    isClickThirdButton: false,
    isClickFourthButton: false,
  });

  const onPressButton = (first, second, third, fourth) => {
    setState({
      isClickFirstButton: first,
      isClickSecondButton: second,
      isClickThirdButton: third,
      isClickFourthButton: fourth,
    });
  };
  return (
    <div className="home-package-root">
      <div className="home-package-main-wrapper">
        <div className="package-main-title">Our best cars</div>
        <div className="package-sub-title">Choose taxi</div>
        <div className="package-button-wrapper">
          <div className="button-wrapper">
            <div
              className="button-inner-wrapper"
              onClick={() => onPressButton(true, false, false, false)}
            >
              <SmallFillButton
                label="hybrid taxi"
                isSelected={state.isClickFirstButton}
              />
            </div>
            <div
              className="button-inner-wrapper"
              onClick={() => onPressButton(false, true, false, false)}
            >
              <SmallFillButton
                label="town taxi"
                isSelected={state.isClickSecondButton}
              />
            </div>
            <div
              className="button-inner-wrapper"
              onClick={() => onPressButton(false, false, true, false)}
            >
              <SmallFillButton
                label="LIMOUSINE TAXI"
                isSelected={state.isClickThirdButton}
              />
            </div>
            <div
              className="button-inner-wrapper"
              onClick={() => onPressButton(false, false, false, true)}
            >
              <SmallFillButton
                label="SUV TAXI"
                isSelected={state.isClickFourthButton}
              />
            </div>
          </div>
        </div>
        <div className="package-card-wrapper">
          {state.isClickFirstButton && (
            <Animated
              className="package-animated-wrapper"
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={300}
              animationOutDuration={500}
              isVisible={state.isClickFirstButton}
              animateOnMount={false}
            >
              <div className="first-inner-wrapper">
                <div className="first-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="first-package-card-wrapper">
                  <PackageCard
                    imagePath={yaris}
                    title="Yaris 2019 Model"
                    rateValue="500.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="first-package-card-wrapper">
                  <PackageCard
                    imagePath={axio}
                    title="Axio 2018 Model"
                    rateValue="700.00"
                    mileValue="150.00"
                    passengerValue="5"
                  />
                </div>
                <div className="first-package-card-wrapper">
                  <PackageCard
                    imagePath={prius}
                    title="Prius 2019 Model"
                    rateValue="500.00"
                    mileValue="150.00"
                    passengerValue="5"
                  />
                </div>
              </div>
            </Animated>
          )}
          {state.isClickSecondButton && (
            <Animated
              className="package-animated-wrapper"
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={300}
              animationOutDuration={500}
              isVisible={state.isClickSecondButton}
              animateOnMount={false}
            >
              <div className="second-inner-wrapper">
                <div className="second-package-card-wrapper">
                  <PackageCard
                    imagePath={alto}
                    title="Alto 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="second-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="second-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="second-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
              </div>
            </Animated>
          )}
          {state.isClickThirdButton && (
            <Animated
              className="package-animated-wrapper"
              animationIn="slideInLeft"
              animationOut="fadeOut"
              animationInDuration={300}
              animationOutDuration={500}
              isVisible={state.isClickThirdButton}
              animateOnMount={false}
            >
              <div className="third-inner-wrapper">
                <div className="third-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="third-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="third-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="third-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
              </div>
            </Animated>
          )}
          {state.isClickFourthButton && (
            <Animated
              className="package-animated-wrapper"
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={300}
              animationOutDuration={500}
              isVisible={state.isClickFourthButton}
              animateOnMount={false}
            >
              <div className="fourth-inner-wrapper">
                <div className="fourth-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="fourth-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="fourth-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
                <div className="fourth-package-card-wrapper">
                  <PackageCard
                    imagePath={wagonR}
                    title="WagonR 2019 Model"
                    rateValue="400.00"
                    mileValue="50.00"
                    passengerValue="4"
                  />
                </div>
              </div>
            </Animated>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
