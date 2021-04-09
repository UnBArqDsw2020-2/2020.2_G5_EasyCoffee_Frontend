import React from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import Home from './screen/Home/home';
import Sobre from './screen/Sobre/Sobre'
import shop from './screen/Shop/Shop'
import Signin from './components/Signin';
import Signup from './components/Signup';


const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/shop" component={shop} />
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
