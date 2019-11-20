import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../redux/configureStore";
import HelloWorld from "./HelloWorld";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => "Home!!!"} />
            <Route
              path="/hello"
              render={() => <HelloWorld greeting="Frien" />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
