import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route
            path="/details/:id/:title/:categoryId"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
