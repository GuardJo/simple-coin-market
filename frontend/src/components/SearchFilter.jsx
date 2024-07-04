import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FormProvider from "./Form";
import { OnChange } from "./../stories/Select.stories";
import InlineList from "./InlineList";
import { verticalAlignTop } from "./../stories/InlineList.stories";
import Select, { Option } from "./Select";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";

class SearchFilter extends PureComponent {
  render() {
    return (
      <FormProvider onSubmit={(value) => console.log(value)}>
        <FormProvider.Consumer>
          {({ onChange, values }) => {
            return (
              <InlineList spacingBetween={2} verticalAlign="bottom">
                <Text xlarge bold>
                  검색
                </Text>
                <Select
                  label="코인 코드"
                  name="code"
                  OnChange={OnChange}
                  value={values["code"]}
                >
                  <Option label="선택"></Option>
                  <Option label="비트코인(BTX)" value="BTX"></Option>
                  <Option label="이더리움(ETH)" value="ETH"></Option>
                  <Option label="도지코인(DOT)" value="DOT"></Option>
                </Select>
                <Input
                  label="최소 거래가"
                  name="minAmount"
                  OnChange={onChange}
                  value={values["minAmount"]}
                ></Input>
                <Input
                  label="최고 거래가"
                  name="maxAmount"
                  OnChange={onChange}
                  value={values["maxAmount"]}
                ></Input>
                <Button type="submit" primary>
                  검색
                </Button>
              </InlineList>
            );
          }}
        </FormProvider.Consumer>
      </FormProvider>
    );
  }
}

SearchFilter.propTypes = {};

export default SearchFilter;
