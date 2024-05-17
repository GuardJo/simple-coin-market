import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Theme, { unit } from "../Theme";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      xsmall,
      small,
      large,
      xlarge,
      type,
      name,
      value,
      errorMessage,
      label,
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
        <input
          id={`input_${name}`}
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          value={value}
          style={{
            marginTop: 2,
            fontSize: Theme.size.md,
            lineHeight: Theme.lineHeight.md,
            padding: unit * 1.5,
            border: 1,
            borderColor: Theme.color.primary,
            borderStyle: "solid",
            borderRadius: 4,
            outline: 0,
            ":hover": {
              boxShadow: "0 0 0px 2px rgba(0, 0, 0, 0.3)",
            },
            ...(xsmall && {
              fontSize: Theme.size.xs,
              padding: unit,
            }),
            ...(small && {
              fontSize: Theme.size.sm,
              padding: unit,
            }),
            ...(large && {
              fontSize: Theme.size.lg,
            }),
            ...(xlarge && {
              fontSize: Theme.size.xg,
            }),
          }}
        />
      </>
    );
  }
}

Input.propTypes = {
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => {},
  autoFocus: false,
};

export default Input;
