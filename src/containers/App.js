/** This container component is meant to connect the other four components.  */

import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Scroll from "../components/Scroll";
import { setSearchField } from "../actions.js";
import Characters from "../components/Characters";
import "../style.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      quotes: []
    };
  }

  render() {
    const { searchField, onSearchChange } = this.props;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !characters.length ? (
      <h1>loading...</h1>
    ) : (
      <div className="app">
        <Logo />
        <Search searchChange={onSearchChange} />
        <Scroll>
          <Characters characters={filteredCharacters} />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
