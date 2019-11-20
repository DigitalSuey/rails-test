import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => "Home!!!"} />
          <Route path="/hello" render={() => <HelloWorld greeting="Frien" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
