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
import Authenticated from "./Components/Authenticated";
import Courses from "./Components/Courses";
import CourseDetails from "./Components/CourseDetails";

const PublicWithContext = WithContext(Public);
const UserSignInWithContext = WithContext(UserSignIn);
const UserSignOutWithContext = WithContext(UserSignOut);
const UserSignUpWithContext = WithContext(UserSignUp);
const AuthenticatedWithContext = WithContext(Authenticated);
const CoursesWithContext = WithContext(Courses);
const CourseDetailsWithContext = WithContext(CourseDetails);

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
          <Route path="/courses" component={CoursesWithContext} />
          <Route path="/courses/:id" component={CourseDetailsWithContext} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
