import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './screen/Home';
import Sobre from './screen/Sobre'
import Shop from './screen/Shop'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/shop" component={Shop} />
    </Switch>
  );
}

export default Routes;
