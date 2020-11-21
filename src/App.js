import React, { Component } from 'react';
import { CountDown } from './CountDown';

class App extends Component {
  render() {
    return (
      <CountDown timeTillDate="12 21 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
    );
  }
}

export default App;