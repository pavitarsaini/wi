import React, {Component} from "react";
import {Redirect} from "react-router-dom";

import '../assets/stylesheets/Landing.css';

class Main extends Component {
    constructor() {
        super();
      this.state = {
        isLoading: true,
      };

    }  
    
    componentDidMount() {
      
      setTimeout(() => {
        this.setState({
          isLoading: false
      })
    }, 4000);
    }

    render() {
        return (
          this.state.isLoading ? <div className="titl">
          Climate Change
      </div> :
          <Redirect to={{pathname: "/wi"}}/> 
    );
}
}

export default Main;