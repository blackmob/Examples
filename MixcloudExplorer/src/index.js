import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import configureStore from './store/configureStore';

let store = configureStore();
ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);


