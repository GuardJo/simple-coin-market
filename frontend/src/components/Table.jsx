import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Table extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        {children}
      </table>
    );
  }
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
