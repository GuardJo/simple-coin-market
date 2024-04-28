import InlineList from "../components/InlineList";
import TestBox from "./TestBox";

export default {
  title: "Common/InlineList",
  component: InlineList,
  argTypes: {},
};

export const Default = () => {
  return (
    <InlineList>
      <TestBox></TestBox>
      <TestBox></TestBox>
      <TestBox></TestBox>
    </InlineList>
  );
};

export const alignCenter = () => {
  return (
    <InlineList align="center">
      <TestBox></TestBox>
      <TestBox></TestBox>
      <TestBox></TestBox>
    </InlineList>
  );
};

export const alignRight = () => {
  return (
    <InlineList align="right">
      <TestBox></TestBox>
      <TestBox></TestBox>
      <TestBox></TestBox>
    </InlineList>
  );
};

export const verticalAlignTop = () => {
  return (
    <InlineList verticalAlign="top">
      <TestBox></TestBox>
      <TestBox></TestBox>
      <TestBox></TestBox>
    </InlineList>
  );
};

export const verticalAlignBottom = () => {
  return (
    <InlineList verticalAlign="bottom">
      <TestBox></TestBox>
      <TestBox></TestBox>
      <TestBox></TestBox>
    </InlineList>
  );
};
