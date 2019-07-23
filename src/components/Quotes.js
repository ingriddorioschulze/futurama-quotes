/** This component is meant to display a modal with the quotes from one character.  */

import React from "react";

const Quotes = props => {
  return (
    <div className="quotes-container">
      {props.quotes.map(quote => (
        <div className="quote" key={quote.quote}>
          <div>‣ {quote.quote}</div>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
