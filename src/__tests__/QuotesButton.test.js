import React from "react";
import { shallow } from "enzyme";
import QuotesButton from "../components/QuotesButton.js";

describe("Button", () => {
  const mockFn = jest.fn();
  it("should be defined", () => {
    expect(QuotesButton).toBeDefined();
  });
  it("should render correctly", () => {
    const tree = shallow(
      <QuotesButton name="button test" handleClick={mockFn} />
    );
    expect(tree).toMatchSnapshot();
  });
});
