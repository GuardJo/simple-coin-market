import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AppNav, { HEIGHT } from "../components/AppNav";
import { unit } from "../Theme";

class AppLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          marginTop: HEIGHT,
        }}
      >
        <AppNav />
        <div
          style={{
            padding: unit * 4,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
