/** This component is meant to wrap components that needs the scroll function.  */

import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "600px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
