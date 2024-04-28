import Text from "../components/Text";

export default {
  title: "Common/Text",
  component: Text,
  argTypes: {},
};

export const Default = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text>기본</Text>
      <Text bold>bold</Text>
      <Text light>light</Text>
      <Text xsmall>xsmall</Text>
      <Text small>small</Text>
      <Text large>large</Text>
      <Text xlarge>xlarge</Text>
      <Text primary>primary</Text>
      <Text secondary>secondary</Text>
      <Text inverse>inverse</Text>
    </div>
  );
};
