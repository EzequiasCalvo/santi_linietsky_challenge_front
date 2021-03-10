import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { MainWrapper } from "./style/login";

function App() {
  // useEffect(() => {
  // })
  return (
    <div>
      <Router history={history}>
        <MainWrapper>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </MainWrapper>
      </Router>
      <Login />
    </div>
  );
}

export default App;
