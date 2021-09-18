/** @format */

import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import WithContext from "./Context";

import Header from "./Components/Header";
import Public from "./Components/Public";
import NotFound from "./Components/NotFound";
import UserSignUp from "./Components/UserSignUp";
import UserSignIn from "./Components/UserSignIn";
import UserSignOut from "./Components/UserSignOut";

const PublicWithContext = WithContext(Public);
const UserSignInWithContext = WithContext(UserSignIn);
const UserSignOutWithContext = WithContext(UserSignOut);
const UserSignUpWithContext = WithContext(UserSignUp);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={PublicWithContext} />
          <Route path="/signin" component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signout" component={UserSignOutWithContext} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;