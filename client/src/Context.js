/** @format */

import React, { Component } from "react";
import Data from "./Data";

const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.data = new Data();
    this.state = {
      authenticatedUser: localStorage.getItem("authUser") || null,
      credentials: null,
    };
  }

  render() {
    const { authenticatedUser } = this.state;
    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
      },
      credentials: {
        username: localStorage.username,
        password: localStorage.password,
      },
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }

  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password);
    if (user !== null) {
      localStorage.setItem("authUser", JSON.stringify(user));
      localStorage.setItem("userId", user.id);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      this.setState(() => {
        return {
          authenticatedUser: JSON.parse(localStorage.authUser),
          credentials: {
            username: localStorage.username,
            password: localStorage.password,
          },
        };
      });
    }
    return user;
  };

  signOut = () => {
    this.setState(() => {
      localStorage.clear();
      return {
        authenticatedUser: null,
        credentials: null,
      };
    });
  };
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
}
