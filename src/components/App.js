import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MapChart from "./MapChart";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/wi" component={MapChart} />
        </div>
      </Router>
    );
  }
}
export default App;