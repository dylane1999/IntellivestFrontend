import React from 'react';
import { Route, Switch } from 'react-router-native';
import LoggedInPage from '../pages/LoggedInPage';

export const PrivateRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoggedInPage} />
      </Switch>
    </>
  );
};
