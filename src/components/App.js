import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MapChart from "./MapChart";
import Kenya from "./CountryPages/Kenya"
import Jakarta from "./CountryPages/Jakarta"
import Califorina from "./CountryPages/Califorina"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/wi" component={MapChart}/>
                    <Route exact path="/wi/kenya" component={Kenya}/>
                    <Route exact path="/wi/jakarta" component={Jakarta}/>
                    <Route exact path="/wi/califorina" component={Califorina}/>
                </div>
            </Router>
        );
    }
}
export default App;