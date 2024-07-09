import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Option from "./Option";
import Theme, { unit } from "../Theme";

export { Option };

class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };

    this.setRef = this.setRef.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus() {
    this.setState({ focused: true });
  }

  handleBlur() {
    this.setState({ focused: false });
  }

  handleChange(e) {
    const { name, onChange } = this.props;

    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const {
      children,
      xsmall,
      small,
      large,
      xlarge,
      name,
      value,
      errorMessage,
      label,
      disabled,
    } = this.props;

    return (
      <>
        <label
          htmlFor={`input_${name}`}
          style={{
            display: "block",
            fontSize: Theme.size.xs,
            top: 2,
            left: unit * 2,
            cursor: "pointer",
            ...(errorMessage && {
              color: Theme.color.error,
            }),
          }}
        >
          {errorMessage || label}
        </label>
        <div
          style={{
            marginTop: 2,
            border: 1,
            borderColor: Theme.color.primary,
            borderStyle: "solid",
            borderRadius: 4,
            padding: unit * 1.5,
            ...((xsmall || small) && {
              padding: unit - 1,
            }),
            ...((large || xlarge) && {
              padding: unit * 2,
            }),
            ...(this.focused && {
              boxShadow: "0 0 0px 2px rgba(0, 0, 0, 0.3)",
            }),
            ...(errorMessage && {
              borderColor: Theme.color.error,
            }),
          }}
        >
          <select
            id={`input_${name}`}
            ref={this.setRef}
            disabled={disabled}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={value}
            style={{
              fontSize: Theme.size.md,
              lineHeight: Theme.lineHeight.md,
              backgroundColor: Theme.color.white,
              border: 0,
              outline: 0,
              width: "100%",
              height: "100%",
              ...(xsmall && {
                fontSize: Theme.size.xs,
              }),
              ...(small && {
                fontSize: Theme.size.sm,
              }),
              ...(large && {
                fontSize: Theme.size.lg,
              }),
              ...(xlarge && {
                fontSize: Theme.size.xg,
              }),
            }}
          >
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { disabled })
            )}
          </select>
        </div>
      </>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
};

Select.defaultProps = {
  onChange: () => {},
  autoFocus: false,
};

export default Select;
