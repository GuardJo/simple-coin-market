import React, { PureComponent } from "react";
import Theme, { unit } from "../Theme";
import Heading from "./Heading";
import Text from "./Text";

const HEIGHT = 64;

class AppNav extends PureComponent {
  render() {
    return (
      <div
        style={{
          ...Theme.depth.level1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          left: 0,
          widows: "100%",
          height: HEIGHT - 4,
          backgroundColor: Theme.color.primary,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: unit * 2,
            paddingRight: unit * 2,
          }}
        >
          <Heading level={3} inverse>
            Simple Coin Market
          </Heading>
          <Text inverse bold large>
            회원가입
          </Text>
        </div>
      </div>
    );
  }
}

export default AppNav;
