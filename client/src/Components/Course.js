/** @format */

import React from "react";
import { Link } from "react-router-dom";
import images from "../Images";

//Course structure

function Course(props) {
  const { title, estimatedTime, id } = props;
  const image_index = Math.floor(Math.random() * 16);
  return (
    <div className="course">
      <Link to={`/courses/${id}`}>
        <img src={images[image_index]} alt="" />
        <div className="details">
          <p className="course_title">{title}</p>
          <h5>{estimatedTime}</h5>
        </div>
      </Link>
    </div>
  );
}

export default Course;
