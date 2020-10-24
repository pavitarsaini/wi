import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MapChart from "./MapChart";
import Kenya from "./CountryPages/Kenya"
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/wi" component={MapChart} />
          <Route path="/kenya" component={Kenya} />
          <Route path="/idn" component={Kenya} />
        </div>
      </Router>
    );
  }
}
export default App;