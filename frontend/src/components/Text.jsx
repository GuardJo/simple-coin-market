import React, { PureComponent } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Theme";
import PropTypes from "prop-types";

export default class Text extends PureComponent {
  render() {
    const {
      children,
      bold,
      light,
      xsmall,
      small,
      large,
      xlarge,
      secondary,
      primary,
      inverse,
    } = this.props;

    return (
      <ThemeProvider theme={Theme}>
        <span
          style={{
            color: Theme.color,
            fontSize: Theme.size.md,
            lineHeight: Theme.lineHeight.md,
            ...(bold && { fontWeight: "bold" }),
            ...(light && { fontWeight: "light" }),
            ...(inverse && { color: Theme.color.white }),
            ...(xlarge && {
              fontSize: Theme.size.xg,
              lineHeight: Theme.lineHeight.xg,
            }),
            ...(large && {
              fontSize: Theme.size.lg,
              lineHeight: Theme.lineHeight.lg,
            }),
            ...(xsmall && {
              fontSize: Theme.size.xs,
              lineHeight: Theme.lineHeight.xs,
            }),
            ...(small && {
              fontSize: Theme.size.sm,
              lineHeight: Theme.lineHeight.sm,
            }),
            ...(secondary && { color: Theme.color.secondary }),
            ...(primary && { color: Theme.color.primary }),
          }}
        >
          {children}
        </span>
      </ThemeProvider>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  light: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  inverse: PropTypes.bool,
};
