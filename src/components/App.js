import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MapChart from "./MapChart";
import Kenya from "./CountryPages/Kenya"
import Jakarta from "./CountryPages/Jakarta"
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/wi" component={MapChart}/>
                    <Route exact path="/wi/kenya" component={Kenya}/>
                    <Route exact path="/wi/jakarta" component={Jakarta}/>
                </div>
            </Router>
        );
    }
}
export default App;