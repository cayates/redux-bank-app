import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount }  from '../store/actions/index';

//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

class UserDetail extends Component {

  render() {
    if(!this.props.user) {
      return (
        <div>Please select a user...</div>
      )
    }
    const { id } = this.props.match.params;
    const userAccounts = this.props.user
    let accounts = userAccounts.accounts.map(accountInfo => { 
      return (
        <div key={accountInfo.id}>
          <Link
            onClick={() => this.props.selectAccount(accountInfo)}
            to={`/users/${id}/${accountInfo.id}`}>{accountInfo.accountType}</Link>
        </div>
      )
      })
      return (
        <div className="col-md-6">
          <div className= "card">
            <div className= "card-block">
            <Link className="btn btn-primary" to={`/`}>Back to Home</Link>            
            <h4 className= "card-title">Account Information</h4>
              <h6 className= "card-subtitle mb-2 text-muted">{this.props.user.name}</h6>
              <div className= "card-text">
                <div>{this.props.user.email}</div>
                <div>{this.props.user.phone}</div>
                <div>{this.props.user.address}</div>
              </div>
              {accounts}
            </div>
            <Link className="btn btn-primary" to="/users" >Back to List of Users</Link>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser, 
    account: state.selectedAccount 
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAccount: selectAccount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
