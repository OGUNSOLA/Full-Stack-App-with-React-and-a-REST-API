/** @format */

import React, { useState, useEffect } from "react";
import Course from "./Course";

function Courses({ context }) {
  const [courses, setCourses] = useState([]);
  console.log(context);

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
    </div>
  );
}

export default Courses;
