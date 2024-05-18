import Option from "../components/Option";

export default {
  title: "Common/Option",
  component: Option,
  argTypes: {},
};

export const Default = () => {
  return <Option value="test" />;
};

export const HasLabel = () => {
  return <Option value="test" label="test label" />;
};

export const Disabled = () => {
  return <Option value="test" disabled />;
};
