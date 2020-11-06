import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Main from "./Main";
import Landing from "./Landing";
import MapChart from "./MapChart";
import Kenya from "./CountryPages/Kenya"
import Jakarta from "./CountryPages/Jakarta"
import Califorina from "./CountryPages/Califorina"
import Atlantic from "./CountryPages/Atlantic"
import Brazil from "./CountryPages/Brazil"
import China from "./CountryPages/China"
import References from "./References"
import About from "./About"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/wi" component={MapChart}/>
                    <Route exact path="/wi/landing" component={Landing}/>
                    <Route exact path="/wi/main" component={Main}/>
                    <Route exact path="/wi/kenya" component={Kenya}/>
                    <Route exact path="/wi/jakarta" component={Jakarta}/>
                    <Route exact path="/wi/califorina" component={Califorina}/>
                    <Route exact path="/wi/atlantic" component={Atlantic}/>
                    <Route exact path="/wi/brazil" component={Brazil}/>
                    <Route exact path="/wi/china" component={China}/>
                    <Route exact path="/wi/references" component={References}/>
                    <Route exact path="/wi/about" component={About}/>
                 </div>
            </Router>
        );
    }
}
export default App;