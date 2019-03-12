import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Route path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
