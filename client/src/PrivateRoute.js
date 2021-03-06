import React from 'react';
import {Consumer} from "./Context";
import { Route, Redirect } from "react-router-dom";


function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Consumer>
      {(context) => (
        <Route
          {...rest}
          render={(props) =>
            context.authenticatedUser ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      )}
    </Consumer>
  );
}

export default PrivateRoute
