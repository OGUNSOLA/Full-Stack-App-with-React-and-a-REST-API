/** @format */

import React, { Component } from "react";
import Data from "./Data";

const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.data = new Data();
    this.state = {
      authenticatedUser: localStorage.getItem("authUser") || "",
      credentials: null,
      userId: localStorage.getItem("userId") || null,
      author: localStorage.getItem("author") || "",
    };
  }

  render() {
    const { authenticatedUser } = this.state;
    const { userId, author } = this.state;

    const value = {
      authenticatedUser,
      userId,
      author,
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
    console.log("user", user);
    const firstName = user.firstName;
    const userId = user.id;
    if (user !== null) {
      localStorage.setItem("authUser", firstName);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("author", JSON.stringify(user));

      this.setState(() => {
        return {
          authenticatedUser: localStorage.authUser,
          userId: localStorage.userId,
          author: JSON.parse(localStorage.author),

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
