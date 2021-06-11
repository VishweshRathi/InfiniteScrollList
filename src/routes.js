import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './projected_routes'
import Login from './containers/pages/login'
import Dashboard from './containers/pages/dashboard'

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes
