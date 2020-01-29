import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <Route exact path="/" component={Login} />
        <Route path="/:projectId" component={App}/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
