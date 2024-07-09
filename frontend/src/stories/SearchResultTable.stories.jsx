import SearchResultTable from "../components/SearchResultTable";

export default {
  title: "components/SearchResultTable",
  component: SearchResultTable,
  argTypes: {},
};

const searchResults = [
  {
    id: "btx_01",
    name: "비트코인",
    totalPrice: "1,000,000,000 원",
    currentPrice: "800,000,000 원",
    datetime: "2024-07-07 22:41",
  },
];

export const OnlyOne = () => {
  return <SearchResultTable searchResults={searchResults}></SearchResultTable>;
};

export const Multiple = () => {
  let serchResults2 = [
    ...searchResults,
    {
      id: "eth_01",
      name: "이더리움",
      totalPrice: "4,000,000 원",
      currentPrice: "2,000,000 원",
      datetime: "2024-07-07 22:41",
    },
  ];

  return <SearchResultTable searchResults={serchResults2}></SearchResultTable>;
};
