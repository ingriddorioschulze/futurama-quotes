/** This component is meant to display a list of characters.  */

import React from "react";

const Characters = props => {
  // props.showQuotes("bender");
  return (
    <div className="characters-container">
      {props.characters.map(character => (
        <div className="character" key={character.Name}>
          <div className="character-name">{character.Name}</div>
          <img src={character.PicUrl} alt="futurama character" />
        </div>
      ))}
    </div>
  );
};

export default Characters;
