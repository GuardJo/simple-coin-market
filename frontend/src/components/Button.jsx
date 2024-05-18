import PropTypes from "prop-types";
import Theme, { unit } from "../Theme";
import { PureComponent } from "react";

export default class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      onPress,
    } = this.props;

    return (
      <button
        style={{
          ...Theme.depth.level1,
          border: 1,
          borderStyle: "solid",
          borderColor: Theme.color.default,
          borderRadius: Theme.unit,
          color: Theme.color.default,
          fontSize: Theme.size.md,
          fontWeight: "bold",
          padding: unit * 2,
          paddingLeft: unit * 4,
          paddingRight: unit * 4,
          outline: 0,
          cursor: "pointer",
          ":hover": {
            backgroundColor: Theme.color.grayLight,
          },
          ":focus": {
            boxShadow: "0 0 0px 2px rgba(0, 0, 0, 0.3)",
          },
          ...(xsmall && {
            fontSize: Theme.size.xs,
            padding: unit,
          }),
          ...(small && {
            fontSize: Theme.size.sm,
            padding: unit * 1.5,
          }),
          ...(large && {
            fontSize: Theme.size.lg,
            padding: unit * 2.5,
          }),
          ...(xlarge && {
            fontSize: Theme.size.xg,
            padding: unit * 2.5,
          }),
          ...initDisbled(disabled),
          ...initPrimary(primary),
          ...initSecondary(secondary),
        }}
        onClick={onPress}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};

function initDisbled(disabled) {
  if (disabled) {
    return {
      borderColor: Theme.color.grayDark,
      color: Theme.color.grayLight,
      cursor: "default",
      opacity: 0.5,
      backgroundColor: Theme.color.gray,
      ":hover": {
        backgroundColor: Theme.color.gray,
      },
    };
  } else {
    return {};
  }
}

function initPrimary(primary) {
  if (primary) {
    return {
      borderColor: Theme.color.primary,
      color: Theme.color.white,
      backgroundColor: Theme.color.primary,
      ":hover": {
        backgroundColor: Theme.color.primaryDark,
      },
    };
  } else {
    return {};
  }
}

function initSecondary(secondary) {
  if (secondary) {
    return {
      borderColor: Theme.color.secondary,
      color: Theme.color.secondary,
    };
  } else {
    return {};
  }
}
