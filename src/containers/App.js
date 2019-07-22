/** This container component is meant to connect the other four components.  */

import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../actions.js";
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
    }
  };
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Logo />
        <Search onChange={this.props.search} />
        <Scroll>
          <Characters characters={this.props.characters} />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
