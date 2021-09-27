/** @format */

import React, { useEffect } from "react";
import { Redirect } from "react-router";

function UserSignOut({ context }) {
  useEffect(() => {
    console.log(context);
    context.actions.signOut();
  }, []);
  return (
    <div>
      <Redirect to="/"></Redirect>
    </div>
  );
}

export default UserSignOut;
