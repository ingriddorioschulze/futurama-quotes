/** This component is meant to display a list of characters.  */

import React from "react";

const Characters = props => {
  return (
    <div className="characters">
      <div className="name">{props.name}</div>
    </div>
  );
};

export default Characters;
