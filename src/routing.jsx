import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './client/views/Home';

const Routing = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routing;