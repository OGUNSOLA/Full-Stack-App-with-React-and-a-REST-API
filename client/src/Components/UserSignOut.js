/** @format */

import React, { useEffect } from "react";
import { Redirect } from "react-router";

function UserSignOut({ context }) {
  useEffect(() => {
    context.actions.signOut();
  }, [context]);
  return (
    <div>
      <Redirect to="/"></Redirect>
    </div>
  );
}

export default UserSignOut;
