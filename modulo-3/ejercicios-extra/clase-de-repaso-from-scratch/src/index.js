import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRoute } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRoute>
      <App />
    </HashRoute>
  </React.StrictMode>
);
