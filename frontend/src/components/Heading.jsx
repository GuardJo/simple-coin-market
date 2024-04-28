import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Theme, { unit } from "../Theme";

const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

export default class Heading extends PureComponent {
  initHeadingStyle(level) {
    switch (level) {
      case 1:
        return {
          fontSize: Theme.size.h1,
          marginTop: unit * 2,
          marginBottom: unit * 4,
        };
      case 2:
        return {
          fontSize: Theme.size.h2,
          marginTop: unit * 2,
          marginBottom: unit * 4,
        };
      case 3: {
        return {
          fontSize: Theme.size.h3,
          marginTop: unit * 1.5,
          marginBottom: unit * 3,
        };
      }
      case 4: {
        return {
          fontSize: Theme.size.xg,
          marginTop: unit,
          marginBottom: unit * 2,
        };
      }
      case 5: {
        return {
          fontSize: Theme.size.lg,
          marginTop: unit,
          marginBottom: unit * 2,
        };
      }
      case 6: {
        return {
          fontSize: Theme.size.md,
          marginTop: unit,
          marginBottom: unit,
        };
      }
      default: {
        return {};
      }
    }
  }

  render() {
    const { children, inverse, level } = this.props;

    const HeadingTag = headingTags[level - 1];

    return (
      <ThemeProvider theme={Theme}>
        <HeadingTag
          style={{
            lineHeight: Theme.lineHeight.lg,
            fontWeight: "bold",
            ...this.initHeadingStyle(level),
            ...(inverse && { color: Theme.color.white }),
          }}
        >
          {children}
        </HeadingTag>
      </ThemeProvider>
    );
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  inverse: PropTypes.bool,
  level: PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
};
