import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'

// import './css/style.css';

import App from './components/App';
import Orders from './components/Order';

render((<Router history={ browserHistory}>
  <Route path="/" component={App} />
  <Route path="/orders" component={Orders} />
</Router>), document.querySelector("#main"));
