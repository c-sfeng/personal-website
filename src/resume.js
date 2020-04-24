import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import ResumePage from './ResumePage.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ResumePage />
  </React.StrictMode>,
  document.getElementById('resume')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
