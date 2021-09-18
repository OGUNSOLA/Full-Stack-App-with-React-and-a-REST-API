/** @format */

import React, { Component } from "react";

export default class Authenticated extends Component {
  render() {
    const { context } = this.props;
    const authenticatedUser = context.authenticatedUser;
    const courses = context.data.getCourses();
    console.log(courses.data);
    return (
      <div>
        <h1>You are In !</h1>
        <h1>{authenticatedUser.firstName}</h1>
        <h1>{authenticatedUser.lastName}</h1>
        <h1>{authenticatedUser.emailAddress}</h1>
        {/* {courses.map((course) => {
          return <h1>course</h1>;
        })} */}
      </div>
    );
  }
}
