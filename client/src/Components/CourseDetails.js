/** @format */

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function CourseDetails({ context, match }) {
  const [course, setCourse] = useState([]);
  const [author, setAuthor] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const id = match.params.id;

  useEffect(() => {
    context.data.getACourse(id).then((course) => {
      setCourse(course);
      setFirstName(course.user.firstName);
      setLastname(course.user.lastName);
      String(course.user.id) === String(localStorage.userId)
        ? setAuthor(true)
        : setAuthor(false);
    });
  }, []);
  return (
    <div>
      <div className="actions">
        <Link to={`/courses/${course.id}/update`}>UPDATE COURSE</Link>
        {author ? <Link to={`${course.id}/delete`}>DELETE COURSE</Link> : null}
        <Link to="/courses">BACK TO COURSE LIST</Link>
      </div>
      <div className="couseDetails">
        <h1>COURSE</h1>
        <div className="aboutCourse">
          <h1>{course.title}</h1>
          <h4>
            By: {firstName} {lastName}
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
            <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
