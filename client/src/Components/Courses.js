/** @format */

import React, { useState, useEffect } from "react";

function Courses({ context }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    context.data.getCourses().then((courses) => setCourses(courses));
  }, [context.data, courses]);
  return (
    <div>
      {courses.map((course) => {
        return (
          <div className="course" key={course.id}>
            <li>{course.id}</li>
            <li>{course.title}</li>
            <li>{course.description}</li>
            <li>{course.estimatedTime}</li>
            ==========================
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
