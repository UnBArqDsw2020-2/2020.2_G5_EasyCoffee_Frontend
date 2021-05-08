import React from 'react';

import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Signin from './components/Signin';
import Signup from './components/Signup';


import Home from './screen/Home';
import Sobre from './screen/Sobre'
import Shop from './screen/Shop'
import Checkout from './screen/Checkout'


const history = createBrowserHistory();

const Routes = ()=> {
  return(
    <BrowserRouter>
      <Switch>
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route exact path="/sobre" component={Sobre} />
          <Route exact path="/shop" component={shop} />
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route path="/checkout" component={Checkout} />

        </Router>
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;
