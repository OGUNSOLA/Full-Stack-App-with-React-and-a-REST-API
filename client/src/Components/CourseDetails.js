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
        if (course) {
          setCourse(course);
          setFirstName(course.user.firstName);
          setLastname(course.user.lastName);
          String(course.user.id) === String(localStorage.userId)
            ? setAuthor(true)
            : setAuthor(false);
        } else {
          history.push("/notfound"); // if no course is reeturned, route to not found
        }
      })
      .catch((error) => {
        if (error) {
          history.push("/error");
        }
      });
  }, [context.data, history, id]);
  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
          {author ? (
            <Link to={`/courses/${course.id}/update`} className="button">
              UPDATE COURSE
            </Link>
          ) : null}
          {author ? (
            <Link to={`${course.id}/delete`} className="button">
              DELETE COURSE
            </Link>
          ) : null}
          <Link to="/" className="button button-secondary">
            RETURN TO LIST
          </Link>
        </div>
      </div>
      <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              <h4 className="course--name">{course.title}</h4>
              <p>
                By: {firstName} {lastName}
              </p>
              <ReactMarkdown>{course.description}</ReactMarkdown>
            </div>
            <div>
              <h3 className="course--detail--title">ESTIMATED TIME</h3>
              <p>{course.estimatedTime}</p>
              <h3 className="course--detail--title">MATERIALS NEEDED</h3>
              <ReactMarkdown className="course--detail--list">
                {course.materialsNeeded}
              </ReactMarkdown>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default CourseDetails;
