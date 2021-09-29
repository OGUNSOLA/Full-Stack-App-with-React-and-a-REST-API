/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function CourseDetails({ context, match, history }) {
  const [course, setCourse] = useState([]);
  const [author, setAuthor] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const id = match.params.id;

  //fetches new course data
  // uodat and delete buttons are condtionaly rendered
  useEffect(() => {
    context.data
      .getACourse(id)
      .then((course) => {
        setCourse(course);
        setFirstName(course.user.firstName);
        setLastname(course.user.lastName);
        String(course.user.id) === String(localStorage.userId)
          ? setAuthor(true)
          : setAuthor(false);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          history.push("/notfound");
        } else {
          history.push("/error");
        }
      });
  }, [context.data, history, id]);
  return (
    <div className="detailsWrapper">
      <div className="actions">
        {author ? (
          <Link to={`/courses/${course.id}/update`}>UPDATE COURSE</Link>
        ) : null}
        {author ? <Link to={`${course.id}/delete`}>DELETE COURSE</Link> : null}
        <Link to="/">RETURN TO LIST</Link>
      </div>
      <div className="headline">
        <h1>Course Detail</h1>
      </div>
      <div className="courseDetails">
        <div className="aboutCourse">
          <h1 className="courseHeading">COURSE</h1>
          <h1 className="courseTitle">{course.title}</h1>
          <h4>
            By: {firstName} {lastName}
          </h4>

          <ReactMarkdown>{course.description}</ReactMarkdown>
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
