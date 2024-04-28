import Card from "../components/Card";

export default {
  title: "Common/Card",
  component: Card,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      <Card>card1</Card>
      <Card>card2</Card>
      <Card>card3</Card>
    </div>
  );
};
