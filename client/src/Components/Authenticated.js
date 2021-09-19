/** @format */

import React, { useState, useEffect, useContext } from "react";

function Authenticated({ context }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    context.data.getCourses().then((courses) => console.log(courses[0]));
  });
  return <div></div>;
}

export default Authenticated;
