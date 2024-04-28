import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Theme, { unit } from "../Theme";
import { ThemeProvider } from "styled-components";

class Spacing extends PureComponent {
  render() {
    const { top, bottom, left, right, verical, horizontal, children } =
      this.props;

    const computeTop = top ? top : verical;
    const computeBottom = bottom ? bottom : verical;
    const computeLeft = left ? left : horizontal;
    const computeRight = right ? right : horizontal;

    return (
      <ThemeProvider theme={Theme}>
        <div
          style={{
            flex: 1,
            ...(computeTop && { marginTop: computeTop * unit }),
            ...(computeBottom && { marginBottom: computeBottom * unit }),
            ...(computeLeft && { marginLeft: computeLeft * unit }),
            ...(computeRight && { marginRight: computeRight * unit }),
          }}
        >
          {children}
        </div>
      </ThemeProvider>
    );
  }
}

export const propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  verical: PropTypes.number,
  horizontal: PropTypes.number,
  children: PropTypes.node,
};

Spacing.propTypes = propTypes;

export default Spacing;
