import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'

// import './css/style.css';

import App from './components/App';
import Orders from './components/Orders';
import checkout from './components/checkout';


render((<Router history={ browserHistory}>
  <Route path="/" component={App}>
    <Route path="/checkout" component={checkout}/>
  </Route>
  <Route path="/orders" component={Orders} />
</Router>), document.querySelector("#main"));
