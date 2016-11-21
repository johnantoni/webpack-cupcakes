/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports) {

	import React from "react";
	import { render } from "react-dom";
	import firebase from 'firebase';
	
	import './css/style.css';
	import App from './components/App';
	
	const config = {
	  apiKey: " AIzaSyA2hb3GHXnIseQEhg04Ja-h_qpqO_IJJeU",
	  authDomain: "cupcakes-16999.firebaseapp.com",
	  databaseURL: "https://cupcakes-16999.firebaseio.com",
	  storageBucket: "cupcakes-16999.appspot.com"
	};
	
	firebase.initializeApp(config).database().ref();
	
	render(React.createElement(App, null), document.querySelector("#main"));

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map