/** This container component is meant to connect the other four components.  */

import React, { Component } from "react";
import { connect } from "react-redux";
import { search, loadQuotes } from "../actions.js";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Scroll from "../components/Scroll";
import Characters from "../components/Characters";
import "../style.css";

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search(text) {
      dispatch(search(text));
    },
    showQuotes(characterName) {
      console.log("loading quotes", characterName);
      dispatch(loadQuotes(characterName));
    },
    loadQuotes(name) {
      dispatch(loadQuotes(name));
    }
  };
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Logo />
        <Search searchChange={this.props.search} />
        <Scroll>
          <Characters
            showQuotes={this.props.showQuotes}
            characters={this.props.characters}
            loadQuotes={this.props.loadQuotes}
          />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
