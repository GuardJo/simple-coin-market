import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Theme, { unit } from "../Theme";

class TableCell extends PureComponent {
  initHeader(isHeader) {
    return isHeader
      ? {
          backgroundColor: Theme.color.primary,
          color: Theme.color.white,
        }
      : {};
  }

  initAlign(align) {
    switch (align) {
      case "center": {
        return {
          textAlign: "center",
        };
      }
      case "right": {
        return {
          textAlign: "right",
        };
      }
      default: {
        return {};
      }
    }
  }

  render() {
    const { children, isHeader, baseline, align } = this.props;
    const Tag = isHeader ? "th" : "td";
    return (
      <Tag
        style={{
          paddingTop: unit * 4,
          paddingBottom: unit * 4,
          paddingLeft: unit * 8,
          paddingRight: unit * 8,
          backgroundColor: Theme.color.white,
          textAlign: "left",
          ...this.initHeader(isHeader),
          ...(baseline && { borderBottom: `1px solid ${Theme.color.border}` }),
          ...this.initAlign(align),
        }}
      >
        {children}
      </Tag>
    );
  }
}

TableCell.propTypes = {
  children: PropTypes.node,
  isHeader: PropTypes.bool,
  baseline: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

TableCell.defaultProps = {
  isHeader: false,
  baseline: true,
};

export default TableCell;
