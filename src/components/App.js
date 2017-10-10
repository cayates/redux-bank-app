import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="main">
      <div className= "jumbotron text-center">
        <h1 className= "display-3">BankShot</h1>
        <p className= "lead">Your leader in small-scale account management.</p>
        <hr className= "my-4"/>
        <p>Keeping track of all your funds (until you restart the application) ...</p>
        </div>
    </div>
    );
  }
}

export default BaseLayout;
