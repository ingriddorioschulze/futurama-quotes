import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Quotes from "../components/Quotes";

configure({ adapter: new Adapter() });

describe("Characters", () => {
  const closeMock = jest.fn();

  it("renders the array of quotes correctly", () => {
    const quotes = [
      {
        quote: "Of all the friends I've had, you're the first."
      }
    ];
    const wrapper = shallow(<Quotes close={closeMock} quotes={quotes} />);

    const quote = wrapper.find(".quote");
    expect(quote.text()).toEqual(
      "‣ Of all the friends I've had, you're the first."
    );
  });

  it("calls the close function when the closing 'x' is clicked", () => {
    const quotes = [];
    const wrapper = shallow(<Quotes close={closeMock} quotes={quotes} />);

    const x = wrapper.find(".modal-close");
    x.simulate("click");
    expect(closeMock).toHaveBeenCalled();
  });

  it("calls the close function when the button 'back' is clicked", () => {
    const quotes = [];
    const wrapper = shallow(<Quotes close={closeMock} quotes={quotes} />);

    const button = wrapper.find(".btn");
    button.simulate("click");
    expect(closeMock).toHaveBeenCalled();
  });
});
