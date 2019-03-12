import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "jquery";
// import "bootstrap/dist/js/bootstrap";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/style.css";

import HomePage from "./home";
import Store from "./store";
import Cart from "./cart";

const routing = (
  <Router>
    <div className="container">
      <nav class="navigation">
        <ul className="row">
          <li className="four columns">
            <Link to="/">Home</Link>
          </li>
          <li class="four columns">
            <Link to="/store">Shopping</Link>
          </li>
          <li class="four columns">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" component={HomePage} />
      <Route path="/store" component={Store} />
      <Route path="/cart" component={Cart} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
