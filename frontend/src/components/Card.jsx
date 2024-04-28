import React, { PureComponent } from "react";
import Spacing, { propTypes as spacingPropTypes } from "./Spacing";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Theme, { unit } from "../Theme";

export default class Card extends PureComponent {
  render() {
    const { children, ...spacingPropTypes } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <div
          style={{
            ...Theme.depth.level1,
            borderRadius: unit,
            backgroundColor: Theme.color.white,
            display: "flex",
            overflow: "hidden",
            marginBottom: unit * 4,
          }}
        >
          <Spacing {...spacingPropTypes}>{children}</Spacing>
        </div>
      </ThemeProvider>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  ...spacingPropTypes,
};
