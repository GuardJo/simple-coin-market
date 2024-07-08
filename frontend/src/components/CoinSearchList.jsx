import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Heading from "./Heading";
import SearchFilter from "./SearchFilter";
import SearchResultTable from "./SearchResultTable";

class CoinSearchList extends PureComponent {
  state = {
    searchResults: [
      {
        id: "btx_01",
        name: "비트코인",
        totalPrice: "100,000,000 원",
        currentPrice: "70,000,000 원",
        datetime: "2024-07-08 19:20",
      },
    ],
  };

  render() {
    const { searchResults } = this.state;

    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={3} horizontal={4}>
          <SearchFilter />
        </Card>
        <Card>
          <SearchResultTable searchResults={searchResults} />
        </Card>
      </div>
    );
  }
}

CoinSearchList.propTypes = {};

export default CoinSearchList;
