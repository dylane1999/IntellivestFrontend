import React from 'react';
import { Route, Switch } from 'react-router-native';
import HomePage from '../pages/HomePage';

export const PrivateRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};
