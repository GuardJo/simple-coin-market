import Button from "../components/Button";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {},
};

export const Default = () => {
  return <Button>Test</Button>;
};

export const Disabled = () => {
  return <Button disabled>Test</Button>;
};

export const Xsmall = () => {
  return <Button xsmall>Test</Button>;
};

export const Small = () => {
  return <Button small>Test</Button>;
};

export const Large = () => {
  return <Button large>Test</Button>;
};

export const Xlarge = () => {
  return <Button xlarge>Test</Button>;
};

export const Secondary = () => {
  return <Button secondary>Test</Button>;
};

export const Primary = () => {
  return <Button primary>Test</Button>;
};
