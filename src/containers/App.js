/** This container component is meant to connect the other four components.  */

import React, { Component } from "react";
import { connect } from "react-redux";
import { search, loadQuotes, closeQuotes } from "../actions.js";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Scroll from "../components/Scroll";
import Characters from "../components/Characters";
import Quotes from "../components/Quotes";
import "../style.css";

const mapStateToProps = state => {
  return {
    characters: state.characters,
    quotes: state.quotes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search(text) {
      dispatch(search(text));
    },

    loadQuotes(name) {
      dispatch(loadQuotes(name));
    },

    closeQuotes() {
      dispatch(closeQuotes());
    }
  };
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Logo />
        <Search searchChange={this.props.search} />
        {this.props.quotes && (
          <Quotes quotes={this.props.quotes} close={this.props.closeQuotes} />
        )}
        <Scroll>
          <Characters
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
