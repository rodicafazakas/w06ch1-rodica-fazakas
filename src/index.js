import React from 'react';
import ReactDOM from 'react-dom';
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.js";
// import "@fontsource/montserrat";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store/store';
import {Provider} from 'react-redux';

// the store looks like this initialValues
let store = configureStore({
  tasks: [
    {
      id: 1,
      name: "laundry",
      complete: false
    },
  ],
  currentTask: {},
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
