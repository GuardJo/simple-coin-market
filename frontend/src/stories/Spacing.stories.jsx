import Spacing from "../components/Spacing";
import TestBox from "./TestBox";

export default {
  title: "Spacing",
  component: Spacing,
  argTypes: {},
};

export const Default = () => {
  return (
    <TestBox>
      <Spacing top={1}>
        <TestBox>top : 1</TestBox>
      </Spacing>
      <Spacing bottom={2}>
        <TestBox>bottom : 2</TestBox>
      </Spacing>
      <Spacing left={3}>
        <TestBox>left : 3</TestBox>
      </Spacing>
      <Spacing right={4}>
        <TestBox>right : 4</TestBox>
      </Spacing>
      <Spacing horizontal={5}>
        <TestBox>horizontal : 5</TestBox>
      </Spacing>
      <Spacing vertical={6}>
        <TestBox>vertical : 6</TestBox>
      </Spacing>
    </TestBox>
  );
};
