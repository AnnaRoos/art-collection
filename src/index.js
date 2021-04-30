import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyB8i4G-wblY_5C4q3Qa1MPdnmBXyhQ10ww',
  authDomain: 'art-collection-ba95c.firebaseapp.com',
  databaseURL:
    'https://art-collection-ba95c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'art-collection-ba95c',
  storageBucket: 'art-collection-ba95c.appspot.com',
  messagingSenderId: '746242567116',
  appId: '1:746242567116:web:fd342bedb3fd9695654b69',
  measurementId: 'G-SGH1LZQWDW',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firebaseui = require('firebaseui');
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

const app = (
  <BrowserRouter>
    <App firebase={firebase}/>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
