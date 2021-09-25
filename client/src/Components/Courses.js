/** @format */

import React, { useState, useEffect } from "react";
import Course from "./Course";
import plussign from "../images/plus.png";
import { Link } from "react-router-dom";

function Courses({ context }) {
  const [courses, setCourses] = useState([]);
  const authUser = context.authenticatedUser;
  console.log("user", authUser);

  useEffect(() => {
    context.data.getCourses().then((courses) => setCourses(courses));
  }, []);
  return (
    <div>
      {courses.map((course) => {
        return (
          <Course
            title={course.title}
            estimatedTime={course.estimatedTime}
            key={course.id}
            id={course.id}
          />
        );
      })}
      {authUser ? (
        <Link className="createCourse" to="/courses/create">
          <img src={plussign} alt="plus sign" />
          <h1>CREATE A COURSE</h1>
        </Link>
      ) : null}
    </div>
  );
}

export default Courses;
