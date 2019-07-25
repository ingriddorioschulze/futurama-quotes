import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuotesButton from "../components/QuotesButton.js";

configure({ adapter: new Adapter() });

describe("QuotesButton", () => {
  const loadQuotesMock = jest.fn();

  it("renders the button when there is a mapping and calls the loadQuotes function when clicked", () => {
    const character = {
      Name: "Turanga Leela"
    };
    const wrapper = shallow(
      <QuotesButton character={character} loadQuotes={loadQuotesMock} />
    );
    const button = wrapper.find(".btn");
    expect(
      button.matchesElement(<button className="btn">Quotes</button>)
    ).toEqual(true);

    button.simulate("click");
    expect(loadQuotesMock).toHaveBeenCalledWith("Leela");
  });

  it("does not render the button when there is no mapping for the character", () => {
    const character = {
      Name: "Morbo"
    };
    const wrapper = shallow(
      <QuotesButton character={character} loadQuotes={loadQuotesMock} />
    );
    expect(
      wrapper.contains(<span className="no-quotes">no quotes :(</span>)
    ).toEqual(true);
  });
});
