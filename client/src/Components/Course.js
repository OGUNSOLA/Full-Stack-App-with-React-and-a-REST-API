/** @format */

import React from "react";
import { Link } from "react-router-dom";
import images from "../Images";

//Course structure

function Course(props) {
  const { title, estimatedTime, id } = props;
  // use random number to retrive an image from image database
  const image_index = Math.floor(Math.random() * 16);
  return (
    <Link to={`/courses/${id}`} className="course--module course--link">
      <img src={images[image_index]} alt="" width="100%" />
      <div className="details">
        <h3 className="course--title">{title}</h3>
        <h5 className="course--title">{estimatedTime}</h5>
      </div>
    </Link>
  );
}

export default Course;
