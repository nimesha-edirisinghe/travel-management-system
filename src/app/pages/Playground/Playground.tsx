import React, { Component } from 'react';
import 'antd/lib/drawer/style/css';
import './Playground.scss';

class Playground extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    return 'clicked';
  };

  render() {
    return <div>Welcome</div>;
  }
}

export default Playground;
