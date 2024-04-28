import React, { PureComponent } from "react";

export default class Flex extends PureComponent {
  render() {
    return (
      <div>
        <h4>flex direction: 'row'</h4>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ border: "1px red solid", padding: 30 }}>Box 1</div>
          <div style={{ border: "1px red solid", padding: 30 }}>Box 2</div>
          <div style={{ border: "1px red solid", padding: 30 }}>Box 3</div>
        </div>
        <h4>flex directionn : 'column'</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ border: "1px red solid", padding: 30 }}>Box 1</div>
          <div style={{ border: "1px red solid", padding: 30 }}>Box 2</div>
          <div style={{ border: "1px red solid", padding: 30 }}>Box 3</div>
        </div>
      </div>
    );
  }
}
