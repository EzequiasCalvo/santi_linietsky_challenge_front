// import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";

function App() {
  // useEffect(() => {
  // })
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/welcome" exact component={Welcome} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
      <Login />
    </div>
  );
}

export default App;
