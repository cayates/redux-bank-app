// baselayout.js

import React, {Component} from 'react';

export default class BaseLayout extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="base">
        <nav className="navbar">
          <h3>Header should go here.</h3>
        </nav>
        
        {this.props.children}

        <footer>
          <h3>Footer goes here.</h3>
        </footer>
      </div>
    );
  }
}