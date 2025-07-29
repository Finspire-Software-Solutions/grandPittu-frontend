import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import "../styles/main.css";
import "../public/style.css";
import "../public/styles/animate.css";
import "../public/styles/bootstrap.css";
import "../public/styles/magnific-popup.css";
import "../public/styles/splitting.css";
import "../public/styles/swiper.css";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
