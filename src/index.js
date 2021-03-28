import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import './scss/main.scss';
import './index.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers/index';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
