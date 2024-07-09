import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FormProvider from "./Form";
import InlineList from "./InlineList";
import Select, { Option } from "./Select";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";

class SearchFilter extends PureComponent {
  render() {
    return (
      <FormProvider onSubmit={(values) => console.log(values)}>
        <FormProvider.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={4} verticalAlign="bottom">
              <Text large bold>
                검색
              </Text>
              <Select
                label="코인 코드"
                name="code"
                onChange={onChange}
                value={values["code"]}
                small
              >
                <Option label="선택"></Option>
                <Option label="비트코인(BTX)" value="BTX"></Option>
                <Option label="이더리움(ETH)" value="ETH"></Option>
                <Option label="도지코인(DOT)" value="DOT"></Option>
              </Select>
              <Input
                label="최소 거래가"
                name="minAmount"
                onChange={onChange}
                value={values["minAmount"]}
              ></Input>
              <Input
                label="최고 거래가"
                name="maxAmount"
                onChange={onChange}
                value={values["maxAmount"]}
              ></Input>
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </FormProvider.Consumer>
      </FormProvider>
    );
  }
}

SearchFilter.propTypes = {};

export default SearchFilter;
