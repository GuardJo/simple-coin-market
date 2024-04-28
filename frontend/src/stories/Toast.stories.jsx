import Toast from "../components/Toast";

export default {
  title: "Common/Toast",
  component: Toast,
  argTypes: {},
};

export const Default = () => {
  return <Toast message="Not Warning"></Toast>;
};

export const Warning = () => {
  return <Toast message="This is Warning" warning></Toast>;
};
