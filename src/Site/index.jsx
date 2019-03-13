import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Navigation from './navigation';
import Carousel from './carousel';
import Cart from './cart';

class Site extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Carousel />
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

export default Site;
