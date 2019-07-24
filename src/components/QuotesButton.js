import React from "react";
import { quotesMapping } from "../quotesMapping.js";
import "../components/QuotesButton.css";

const QuotesButton = ({ character, loadQuotes }) => {
  const mappedName = quotesMapping[character.Name];

  if (mappedName) {
    return (
      <button className="btn" onClick={() => loadQuotes(mappedName)}>
        Quotes
      </button>
    );
  } else {
    console.log(character.Name, mappedName);

    return <span className="no-quotes">no quotes :(</span>;
  }
};

export default QuotesButton;
