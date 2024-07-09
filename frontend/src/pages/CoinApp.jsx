import React, { PureComponent } from "react";
import AppLayout from "./AppLayout";
import CoinOverview from "../components/CoinOverview";
import CoinSearchList from "./../components/CoinSearchList";

class CoinApp extends PureComponent {
  render() {
    return (
      <AppLayout>
        <CoinOverview />
        <CoinSearchList />
      </AppLayout>
    );
  }
}

export default CoinApp;
