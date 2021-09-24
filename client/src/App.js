/** @format */

import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import WithContext from "./Context";

import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import UserSignUp from "./Components/UserSignUp";
import UserSignIn from "./Components/UserSignIn";
import UserSignOut from "./Components/UserSignOut";
import Courses from "./Components/Courses";
import CourseDetails from "./Components/CourseDetails";
import UpdateCourse from "./Components/UpdateCourse";

const UserSignInWithContext = WithContext(UserSignIn);
const UserSignOutWithContext = WithContext(UserSignOut);
const UserSignUpWithContext = WithContext(UserSignUp);
const CoursesWithContext = WithContext(Courses);
const CourseDetailsWithContext = WithContext(CourseDetails);
const HeaderWithContext = WithContext(Header);
const UpdateCourseWithContext = WithContext(UpdateCourse);

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderWithContext />

        <Switch>
          <Route exact path="/" component={CoursesWithContext} />
          <Route path="/signin" component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signout" component={UserSignOutWithContext} />
          <Route exact path="/courses" component={CoursesWithContext} />
          <Route
            exact
            path="/courses/:id"
            component={CourseDetailsWithContext}
          />
          <Route
            exact
            path="/courses/:id/update"
            component={UpdateCourseWithContext}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
