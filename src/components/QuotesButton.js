/** This component is meant to display a button when the characters has quotes available.  */

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
    return <span className="no-quotes">no quotes :(</span>;
  }
};

export default QuotesButton;
