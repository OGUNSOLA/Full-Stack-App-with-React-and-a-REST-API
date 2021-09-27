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
import CreateCourse from "./Components/CreateCourse";
import UpdateCourse from "./Components/UpdateCourse";
import Delete from "./Components/Delete";
import PrivateRoute from "./PrivateRoute";
import Forbidden from "./Components/Forbidden";
import Footer from "./Components/Footer";
import Errors from "./Components/Errors";

const UserSignInWithContext = WithContext(UserSignIn);
const UserSignOutWithContext = WithContext(UserSignOut);
const UserSignUpWithContext = WithContext(UserSignUp);
const CoursesWithContext = WithContext(Courses);
const CourseDetailsWithContext = WithContext(CourseDetails);
const HeaderWithContext = WithContext(Header);
const UpdateCourseWithContext = WithContext(UpdateCourse);
const DeleteCourseWithContext = WithContext(Delete);
const CreateCourseWithContext = WithContext(CreateCourse);
const FooterCourseWithContext = WithContext(Footer);

function App() {
  return (
    <BrowserRouter>
      <div className="mainWrapper">
        <HeaderWithContext />

        <Switch>
          <Route exact path="/" component={CoursesWithContext} />

          <PrivateRoute
            path="/courses/create"
            component={CreateCourseWithContext}
          />

          <Route
            path="/courses/:id/update"
            component={UpdateCourseWithContext}
          />
          <Route
            exact
            path="/courses/:id"
            component={CourseDetailsWithContext}
          />
          <PrivateRoute
            exact
            path="/courses/:id/delete"
            component={DeleteCourseWithContext}
          />
          <Route exact path="/signin" component={UserSignInWithContext} />
          <Route exact path="/signup" component={UserSignUpWithContext} />
          <Route exact path="/signout" component={UserSignOutWithContext} />
          <Route exact path="/forbidden" component={Forbidden} />
          <Route exact path="/notfound" component={NotFound} />
          <Route component={Errors} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
