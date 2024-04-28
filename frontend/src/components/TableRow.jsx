import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TableRow extends PureComponent {
  render() {
    const { children, isHeader, baseline } = this.props;

    return (
      <tr>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { baseline, isHeader });
        })}
      </tr>
    );
  }
}

TableRow.propTypes = {
  children: PropTypes.node,
  isHeader: PropTypes.bool,
  baseline: PropTypes.bool,
};

export default TableRow;
