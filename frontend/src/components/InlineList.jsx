import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Theme";

export default class InlineList extends PureComponent {
  initJustifyContent(align) {
    if (align == "center") {
      return "center";
    } else if (align == "right") {
      return "flex-end";
    } else {
      return "flex-start";
    }
  }

  initAlignItem(verticalAlign) {
    if (verticalAlign == "top") {
      return "flex-start";
    } else if (verticalAlign == "bottom") {
      return "flex-end";
    } else {
      return "center";
    }
  }

  render() {
    const { align, children, spacingBetween, verticalAlign } = this.props;

    return (
      <ThemeProvider theme={Theme}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: this.initJustifyContent(align),
            alignItems: this.initAlignItem(verticalAlign),
            spacingBetween: spacingBetween,
          }}
        >
          {React.Children.map(children, (child) => {
            return <div>{child}</div>;
          })}
        </div>
      </ThemeProvider>
    );
  }
}

InlineList.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  verticalAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
  spacingBetween: PropTypes.number,
  children: PropTypes.node,
};

InlineList.defaultProps = {
  spacingBetween: 1,
};
