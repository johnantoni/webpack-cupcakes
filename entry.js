import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'

// import './css/style.css';

import App from './components/App';
import Orders from './components/Orders';
import Checkout from './components/Checkout';


render((<Router history={ browserHistory}>
  <Route path="/" component={App}>
    <Route path="/checkout" component={Checkout}/>
  </Route>
  <Route path="/orders" component={Orders} />
</Router>), document.querySelector("#main"));
