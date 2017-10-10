//React imports
import React, {Component} from 'react';
//Redux imports
import { connect } from 'react-redux';
import { selectUser } from '../store/actions/index.js'
import { bindActionCreators } from 'redux';
//react router imports
import { Link } from 'react-router-dom';
import '../styles/App.css';


class UserList extends Component {
    render() {
      console.log("props", this.props);
        let users = this.props.users.map((user) => {
            return (
                <div className="row">
                <div className="col-4">
                <div className="list-group">
                <button><li key={user._id} className="list-group-item-action un-bullet-me" onClick={() => this.props.selectUser(user)}>
                  <Link to={`/users/${user._id}`}>{user.name}</Link>
                </li></button>
                </div>
                </div>
                </div>
            );
        });
        return (
            <div className="card text-center">
            <div className="card-header">
              <h5>Users with open accounts:</h5>
            </div>
            <div className="card-body">
              <ul className="col-8">
                {users}
              </ul>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {users: state.users};
}

function mapDispatchToProps(dispatch) {
    return {
      selectUser: function(userId){
        dispatch(selectUser(userId))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
