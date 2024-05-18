import { action } from "@storybook/addon-actions";
import Input from "../components/Input";

export default {
  title: "Common/Input",
  component: Input,
  argTypes: {},
};

export const Default = () => {
  return <Input name="test" label="Test" />;
};

export const HasValue = () => {
  return <Input name="test" label="test" />;
};

export const OnChange = () => {
  return <Input name="test" label="test" onChange={action("OnChange")} />;
};

export const Size = () => {
  return (
    <>
      <Input name="xsmall" label="xsmall" xsmall />
      <Input name="small" label="small" small />
      <Input name="default" label="default" />
      <Input name="large" label="large" large />
      <Input name="xlarge" label="xlarge" xlarge />
    </>
  );
};
