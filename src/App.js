import React, { Component } from 'react';
import { CountDown } from './CountDown';
import { DateForm } from './DateForm';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { formSubmitted: false, name: '', date: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.goBackToForm = this.goBackToForm.bind(this);
  }

  handleFormSubmit(name, date) {
    this.setState({ name, date, formSubmitted: true});
  }

  goBackToForm() {
    this.setState({ formSubmitted: false });
  }

  render() {
    return (
      <div>
        { !this.state.formSubmitted
          ? <DateForm 
              name={this.state.name}
              date={this.state.date}
              handleFormSubmit={this.handleFormSubmit} 
            />
          : <CountDown 
              timeTillDate={this.state.date} 
              timeFormat="YYYY-MM-DD" 
              eventName={this.state.name} 
              goBackToForm={this.goBackToForm}
            />
        }
      </div>
    );
  }
}

export default App;