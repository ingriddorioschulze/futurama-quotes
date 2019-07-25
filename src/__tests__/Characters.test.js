import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Characters from "../components/Characters";

configure({ adapter: new Adapter() });

describe("Characters", () => {
  const loadQuotesMock = jest.fn();

  it("renders the array of characters correctly", () => {
    const characters = [
      {
        Name: "Turanga Leela",
        PicUrl: "https://example.com"
      }
    ];
    const wrapper = shallow(
      <Characters characters={characters} loadQuotes={loadQuotesMock} />
    );
    const image = wrapper.find(".image");
    expect(image.prop("src")).toEqual("https://example.com");

    const name = wrapper.find(".name");
    expect(name.text()).toEqual("Turanga Leela");
  });
});
