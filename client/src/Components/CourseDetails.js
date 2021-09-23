/** @format */

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Course from "./Course";

function CourseDetails({ context, match, id, authenticatedUser }) {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    context.data
      .getACourse(authenticatedUser.id)
      .then((course) => setCourse(course));
  }, []);
  return (
    <div>
      <Header />

      <div classname="actions">
        <Link to="">UPDATE COURSE</Link>
        <Link to="">DELETE COURSE</Link>
        <Link to="">BACK TO COURSE LIST</Link>
      </div>
      <div className="couseDetails">
        <h1>COURSE</h1>
        <div className="aboutCourse">
          <h1>{course.title}</h1>
          <h4>By</h4>
          <h4>{course.firstName}</h4>
          <h4>{course.lastName}</h4>
          <p>{course.description}</p>
        </div>
        <div className="otherDetails">
          <div className="time">
            <h1>ESTIMATED TIME </h1>
            <h3>{Course.estimatedTime}</h3>
          </div>
          <div className="materialsNeeded">
            <h1>MATERIALS NEEDED</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
