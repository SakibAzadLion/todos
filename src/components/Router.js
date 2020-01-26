import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Content from "./Content";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <Route exact path="/" component={App} />
        <Route path="/:projectId" component={App}/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
