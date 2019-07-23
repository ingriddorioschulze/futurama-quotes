/** This component is meant to display a modal with the quotes from one character.  */

import React from "react";

const Quotes = props => {
  return (
    <div className="modal-container">
      <div className="modal-area">
        <div className="modal-close" onClick={props.close}>
          &times;
        </div>
        {props.quotes.map(quote => (
          <div className="quote" key={quote.quote}>
            <div>‣ {quote.quote}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
