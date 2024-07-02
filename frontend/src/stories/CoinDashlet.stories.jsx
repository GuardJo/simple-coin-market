import CoinDashlet from "../components/CoinDashlet";

export default {
  title: "Components/CoinDashlet",
  component: CoinDashlet,
  argTypes: {},
};

export const Default = () => {
  return <CoinDashlet name="비트코인" priceLabel="4,000,000 원"></CoinDashlet>;
};
