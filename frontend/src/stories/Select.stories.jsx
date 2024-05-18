import { action } from "@storybook/addon-actions";
import Select, { Option } from "../components/Select";

export default {
  title: "Common/Select",
  component: Select,
  argTypes: {},
};

const children = [
  <Option value="option1" />,
  <Option value="option2" disabled />,
  <Option value="option3" />,
].map((child) => child);

export const Default = () => {
  return (
    <Select name="test" label="test">
      {children}
    </Select>
  );
};

export const HasError = () => {
  return (
    <Select name="test" label="test" errorMessage="Error!">
      {children}
    </Select>
  );
};

export const HasValue = () => {
  return (
    <Select name="test" label="test" value="option3">
      {children}
    </Select>
  );
};

export const OnChange = () => {
  return (
    <Select name="test" label="test" onChange={action("Change Option")}>
      {children}
    </Select>
  );
};

export const Disabled = () => {
  return (
    <Select name="test" label="test" disabled>
      {children}
    </Select>
  );
};

export const Size = () => {
  return (
    <>
      <Select name="xsmall" label="xsmall" xsmall>
        {children}
      </Select>
      <Select name="samll" label="small" small>
        {children}
      </Select>
      <Select name="default" label="default">
        {children}
      </Select>
      <Select name="large" label="large" large>
        {children}
      </Select>
      <Select name="Xlarge" label="xlarge" xlarge>
        {children}
      </Select>
    </>
  );
};
