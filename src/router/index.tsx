import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import routes from './routes';

export const mapRoute = (routes) => {
  return routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        render={(props) => {
          return route.component ? (
            <route.component routes={route.routes}>
              {route.routes && mapRoute(route.routes)}
            </route.component>
          ) : (
            <>{route.routes && mapRoute(route.routes)}</>
          );
        }}
      ></Route>
    );
  });
};

const Router = () => {
  return (
    <HashRouter>
      <Switch>{mapRoute(routes)}</Switch>
    </HashRouter>
  );
};

export default Router;
