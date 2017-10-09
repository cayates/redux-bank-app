import React, {Component} from 'react';

export default class BaseLayout extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="base">
        <nav className="navbar">
          <h3>Header goes here.</h3>
        </nav>
        
        {this.props.children}

      </div>
    );
  }
}