
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAccount }  from '../store/actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';
import '../styles/App.css';

class UserDetail extends Component {
  render() {
    if(!this.props.user) {
      return (
        <div>Please select a user...</div>
      )
    }
    //get user id from params of URL
    const { id } = this.props.match.params;
    //map over the accounts for the user to create links to them.
    console.log("user detail props", this.props);
    let accounts = this.props.user.accounts.map((account) => {
      //creating a Link with the account type for
      //each account.
      return (
        <div key={account.id}>
          <Link
            onClick={() => this.props.selectAccount(account)}
            to={`/users/${id}/${account.id}`}>{account.accountType}</Link>
        </div>

      )
    })
    return (
      <div className="card text-center">
            <h4 className= "card-header ">Account Information</h4>
            <h6 className= "card-body">{this.props.user.name}</h6>
            <div className= "card-title">
              <div>{this.props.user.email}</div>
              <div>{this.props.user.phone}</div>
              <div className="card-text">
              <div>{this.props.user.address}</div>
              </div>
            </div>
            {accounts}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser
  };
}

function mapDispatchToProps(dispatch) {
    return {
      selectAccount: function(accountInfo){
        dispatch(selectAccount(accountInfo))
      }
    }
}

/*
You will need to create a mapDispatchToProps function here and
return the action creator selectAccount - HINT: see the UserList
component.
*/


export default connect(mapStateToProps,  mapDispatchToProps)(UserDetail);
