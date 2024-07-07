import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableBody from "./TableBody";

class SearchResultTable extends PureComponent {
  render() {
    const { searchResults } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">코인</TableCell>
            <TableCell align="center">시가 총액</TableCell>
            <TableCell align="center">현재 시세</TableCell>
            <TableCell align="right">거래 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchResults.map(
            ({ id, name, totalPrice, currentPrice, datetime }) => (
              <TableRow id={id}>
                <TableCell>{name}</TableCell>
                <TableCell align="center">{totalPrice}</TableCell>
                <TableCell align="center">{currentPrice}</TableCell>
                <TableCell align="right">{datetime}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    );
  }
}

SearchResultTable.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      totalPrice: PropTypes.string,
      currentPrice: PropTypes.string,
      datetime: PropTypes.string,
    })
  ),
};

export default SearchResultTable;
