/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Forbidden() {
  return (
    <div>
      <h1>YOU ARE NOT PERMITTED TO DO THIS </h1>
      <Link className="button button-secondary" to="/">
        Return to Course List
      </Link>
    </div>
  );
}

export default Forbidden;
