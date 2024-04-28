import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Theme, { unit } from "../Theme";
import Spacing from "./Spacing";

class Toast extends PureComponent {
  render() {
    const { message, warning } = this.props;

    return (
      <ThemeProvider theme={Theme}>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            margin: unit * 4,
          }}
        >
          <div
            style={{
              ...Theme.depth.level1,
              borderRadius: unit,
              backgroundColor: warning
                ? Theme.color.error
                : Theme.color.secondary,
              padding: unit * 2,
              marginBottom: unit * 4,
            }}
          >
            <Spacing vertical={4} horizontal={8}>
              {message}
            </Spacing>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

Toast.propTypes = {
  message: PropTypes.string,
  warning: PropTypes.bool,
};

export default Toast;
