/** This component is meant to display a modal with the quotes from one character.  */

import React from "react";
import "../components/Quotes.css";

const Quotes = props => {
  return (
    <div className="modal-container">
      <div className="modal-area">
        <div className="modal-close" onClick={props.close}>
          &times;
        </div>
        <div className="quotes-container">
          {props.quotes.map(quote => (
            <div className="quote" key={quote.quote}>
              ‣ {quote.quote}
            </div>
          ))}
        </div>
        <button className="btn" onClick={props.close}>
          back
        </button>
      </div>
    </div>
  );
};

export default Quotes;
