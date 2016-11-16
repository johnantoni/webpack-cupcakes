import React from "react";
import { render } from "react-dom";
import firebase from 'firebase';

// import './css/style.css';
import App from './components/App';

const config = {
  apiKey: " AIzaSyA2hb3GHXnIseQEhg04Ja-h_qpqO_IJJeU",
  authDomain: "cupcakes-16999.firebaseapp.com",
  databaseURL: "https://cupcakes-16999.firebaseio.com",
  storageBucket: "cupcakes-16999.appspot.com",
};

firebase
  .initializeApp(config)
  .database()
  .ref();

render(<App />, document.querySelector("#main"));
