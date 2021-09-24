/** @format */

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function CourseDetails({ context, match }) {
  const [course, setCourse] = useState([]);
  const id = context.authenticatedUser.id;

  useEffect(() => {
    context.data.getACourse(id).then((course) => setCourse(course));
  }, []);
  console.log(course.user);
  // console.log(course["user"]["firstName"]);
  return (
    <div>
      <Header />

      <div className="actions">
        <Link to="">UPDATE COURSE</Link>
        <Link to="">DELETE COURSE</Link>
        <Link to="">BACK TO COURSE LIST</Link>
      </div>
      <div className="couseDetails">
        <h1>COURSE</h1>
        <div className="aboutCourse">
          <h1>{course.title}</h1>
          <h4>
            {/* By: {course["user"]["firstName"]} {course["user"]["lastName"]} */}
          </h4>
          <h4>{course.firstName}</h4>
          <h4>{course.lastName}</h4>
          <p>{course.description}</p>
        </div>
        <div className="otherDetails">
          <div className="time">
            <h1>ESTIMATED TIME </h1>
            <h3>{course.estimatedTime}</h3>
          </div>
          <div className="materialsNeeded">
            <h1>MATERIALS NEEDED</h1>
            {/* {course.materialsNeeded.map((material) => {
              return <li>{material}</li>;
            })} */}
            <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
