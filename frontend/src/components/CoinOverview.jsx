import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Heading from "./Heading";
import InlineList from "./InlineList";
import CoinDashlet from "./CoinDashlet";

class CoinOverview extends PureComponent {
  render() {
    return (
      <>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet name="비트코인" priceLabel="80,000,000 원" />
          <CoinDashlet name="이더리움" priceLabel="4,123,456 원" />
          <CoinDashlet name="도지코인" priceLabel="10 원" />
        </InlineList>
      </>
    );
  }
}

CoinOverview.propTypes = {};

export default CoinOverview;
