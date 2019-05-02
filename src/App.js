import React, { Component } from 'react';
import logo from './logo.svg';
import FormFilmo from './components/FormFIlm.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <FormFilmo />
        </div>
      </div>
    );
  }
}

export default App;