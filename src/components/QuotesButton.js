import React from "react";
import { quotesMapping } from "../quotesMapping.js";

const QuotesButton = ({ character, loadQuotes }) => {
  const mappedName = quotesMapping[character.Name];

  if (mappedName) {
    return <button onClick={() => loadQuotes(mappedName)}>Quotes</button>;
  } else {
    console.log(character.Name, mappedName);

    return <span>no quotes for {character.Name}</span>;
  }
};

export default QuotesButton;
