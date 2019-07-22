/** This component is meant to display a list of characters.  */

import React from "react";
import axios from "axios";

export default class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCharacters: []
    };
  }

  showCharacters() {
    axios
      .get(
        `https://futuramaapi.herokuapp.com/api/v2/characters?search=${
          this.props.name
        }`
      )
      .then(response => {
        console.log(response.data);
        // this.setState({ characters: response.data });
      });
  }

  render() {
    const { showCharacters } = this.state;
    return <div className="characters" />;
  }
}
