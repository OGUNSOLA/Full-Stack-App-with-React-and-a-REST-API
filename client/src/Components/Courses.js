/** @format */

import React, { useState, useEffect } from "react";
import Course from "./Course";
import { Link } from "react-router-dom";

function Courses({ context }) {
  const [courses, setCourses] = useState([]);
  const authUser = context.authenticatedUser;

  useEffect(() => {
    context.data.getCourses().then((courses) => setCourses(courses));
  }, [context.data]);
  return (
    <main>
      <div className="wrap main--grid">
        {/* Map through the courses array and sisplay then using the COurse component*/}
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

        {/* Create course link only visible when user is authenticated  */}
        {authUser ? (
          <Link
            className="course--module course--add--module"
            to="/courses/create"
          >
            <span className="course--add--title">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 13 13"
                className="add"
              >
                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
              </svg>
              New Course
            </span>
          </Link>
        ) : null}
      </div>
    </main>
  );
}

export default Courses;
