/** This component is meant to display a list of characters.  */

import React from "react";
import QuotesButton from "../components/QuotesButton";

const Characters = props => {
  return (
    <div className="characters-container">
      {props.characters.map(character => (
        <div className="character" key={character.Name}>
          <img
            className="image"
            src={character.PicUrl}
            alt="futurama character"
          />
          <div className="name">{character.Name}</div>
          <QuotesButton character={character} loadQuotes={props.loadQuotes} />
        </div>
      ))}
    </div>
  );
};

export default Characters;
