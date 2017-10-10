import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {

  render(){
    return (
      <div className="base">
        <nav className="navbar">
        <Link className="btn btn-primary" to={`/`}>Back to Home</Link>            
        <Link className="btn btn-success" to={`/users`}>View Users List</Link>            
        </nav>
        
        {this.props.children}

      </div>
    );
  }
}