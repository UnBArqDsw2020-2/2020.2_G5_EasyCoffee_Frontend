import React from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import Home from './screen/Home/home';
import Sobre from './screen/Sobre/Sobre'
import shop from './screen/Shop/Shop'


const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/shop" component={shop} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
