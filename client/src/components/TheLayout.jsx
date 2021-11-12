import React from "react";
import { Header, ScrollTop } from "./index";
import routes from "../routes";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function TheLayout() {
  return (
    <Router>
      <div>
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
          <Redirect from="/" to="/clients/list" />
        </Switch>
      </div>
    </Router>
  );
}

export default TheLayout;
