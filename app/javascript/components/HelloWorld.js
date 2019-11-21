import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_THINGS_REQUEST = "GET_THINGS_REQUEST";
const GET_THINGS_SUCCESS = "GET_THINGS_SUCCESS";

const getThings = () => {
  // console.log("getThings fieruhdo");
  // return { type: GET_THINGS_REQUEST };

  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });

    return fetch("v1/things.json")
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.console.log(error));
  };
};

export function getThingsSuccess(json) {
  return { type: GET_THINGS_SUCCESS, json };
}

class HelloWorld extends Component {
  render() {
    const { getThings, greeting, things } = this.props;

    const thingsList = things.map(item => {
      return (
        <li key={`${item.name}-${item.guid}`}>
          {item.name} {item.guid}
        </li>
      );
    });

    return (
      <>
        Greeting: {greeting}
        <button className="getThingsBtn" onClick={() => getThings()}>
          getThings
        </button>
        <br />
        <ul>{thingsList}</ul>
      </>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

const structuredSelector = createStructuredSelector({
  things: state => state.things
});

const mapDispatchToProps = { getThings };

export default connect(
  structuredSelector,
  mapDispatchToProps
)(HelloWorld);
