import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "../components/Search.js";

configure({ adapter: new Adapter() });

jest.useFakeTimers();

describe("Search", () => {
  const searchMock = jest.fn();

  it("it calls the search function with the value of the input when it changes", () => {
    const wrapper = shallow(<Search searchChange={searchMock} />);
    const input = wrapper.find(".search-input");
    input.simulate("change", { target: { value: "Bender" } });
    jest.runOnlyPendingTimers();
    expect(searchMock).toHaveBeenCalledWith("Bender");
  });
});
