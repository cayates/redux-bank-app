import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default class BaseLayout extends Component {

  render(){
    return (
      <div className="base">
        <nav className="nav justify-content-center">
        <Link className="nav-item" button className="btn btn-primary margin-me" to={`/`}>Back to Home</Link>            
        <Link className="nav-item" button className="btn btn-success margin-me" to={`/users`}>View Users List</Link>            
        </nav>
        
        {this.props.children}

      </div>
    );
  }
}