/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Forbidden() {
  return (
    <div className="wrap">
      <h2>Forbidden</h2>
      <p>YOU ARE NOT PERMITTED TO DO THIS </p>
      <Link className="button button-secondary" to="/">
        Return to Course List
      </Link>
    </div>
  );
}

export default Forbidden;
