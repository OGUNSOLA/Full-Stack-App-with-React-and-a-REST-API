/** @format */

import React from "react";
import { Link } from "react-router-dom";
import images from "../Images";

function Course(props) {
  const { title, estimatedTime, id } = props;
  const image_index = Math.floor(Math.random() * 17);
  return (
    <div>
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