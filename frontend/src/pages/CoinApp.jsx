import React, { PureComponent } from "react";
import AppLayout from "./AppLayout";
import CoinOverview from "../components/CoinOverview";

class CoinApp extends PureComponent {
  render() {
    return (
      <AppLayout>
        <CoinOverview />
      </AppLayout>
    );
  }
}

export default CoinApp;
