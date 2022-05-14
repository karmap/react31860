import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuxzcN7Jr-GQq38EZZxPCCRsWkXEi9GRY",
  authDomain: "react31860.firebaseapp.com",
  projectId: "react31860",
  storageBucket: "react31860.appspot.com",
  messagingSenderId: "312781698188",
  appId: "1:312781698188:web:fa6798bc7f1bc3100377a9"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
