import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import WeatherApp from './WeatherApp';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp defaultCity='tokyo'/>
      </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
