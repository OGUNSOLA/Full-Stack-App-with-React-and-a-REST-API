/** @format */

import React, { Component } from "react";

export default class Public extends Component {
  render() {
    const { context } = this.props;
    console.log(context.actions);
    return (
      <div>
        <h1>Public</h1>
      </div>
    );
  }
}
