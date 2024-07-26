import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';
import './index.css'; // If you have a global CSS file

// Render the App component in a root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Render the Notifications component in a root-notifications div
ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root-notifications')
);
