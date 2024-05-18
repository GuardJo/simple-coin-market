import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export const { Provider, Consumer } = React.createContext({});

class FormProvider extends PureComponent {
  static Consumer = Consumer;

  static getDerivedStateFromProps({ initValues }, prevState) {
    const values =
      initValues !== prevState.initValues ? initValues : prevState.values;

    return {
      initValues,
      values,
      errors: {},
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleSubmit(e) {
    const { values, errors } = this.state;
    e.preventDefault();

    if (Object.values(errors).length === 0) {
      this.props.onSubmit(values);
    }
  }

  onChange(name, updateName) {
    this.validate(this.state.values);
    this.setState(({ values }) => ({
      values: {
        ...values,
        [name]: updateName,
      },
    }));
  }

  reset() {
    this.setState({ values: {} });
  }

  validate(values) {
    const { validate } = this.props;

    if (!validate) {
      return;
    }

    const errors = this.props.validate(values);
    this.setState({
      errors,
    });
  }

  render() {
    const { values, errros, children } = this.state;

    return (
      <Provider
        value={{
          errros,
          values,
          onChange: this.onChange,
          reset: this.reset,
        }}
      >
        <form onSubmit={this.handleSubmit}>{children}</form>
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};

FormProvider.defaultProps = {
  validate: () => {},
  initValues: {},
};

export default FormProvider;
