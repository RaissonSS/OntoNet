import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCg8XpdWiNcFg7hFWjB5lRokTJ4QZPMv6Y",
  authDomain: "ontonet-58f3d.firebaseapp.com",
  projectId: "ontonet-58f3d",
  storageBucket: "ontonet-58f3d.appspot.com",
  messagingSenderId: "958483011677",
  appId: "1:958483011677:web:1505a69fb6e7e2480495b4",
  measurementId: "G-XYGTTW5P29"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('analytics', analytics)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
