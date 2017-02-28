import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DevTools from './DevTools';
import { Provider } from 'react-redux';
import CityPicker from './CityPicker';

class App extends Component {
  render() {
    const { store } = this.props;
    return (

  <Provider store={store}>
      <div className="App">
        <DevTools/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CityPicker/>
      </div>
      </Provider>
    );
  }
}

export default App;
