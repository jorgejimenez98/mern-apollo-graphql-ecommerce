import React from "react";
import { Header, ScrollTop } from "./index";
import routes from "../routes";
import { Route, Redirect, Switch } from "react-router-dom";

function TheLayout() {
  return (
    <React.Fragment>
      <Header />
      <ScrollTop />
      <Switch>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        })}
        <Redirect from="/" to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default TheLayout;
