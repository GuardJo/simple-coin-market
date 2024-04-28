import React, { PureComponent } from "react";

export default class TestBox extends PureComponent {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: 30,
          border: "1px solid red",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
