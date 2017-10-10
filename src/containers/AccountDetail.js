import React, {Component} from 'react'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withdrawFunds} from '../store/actions/index';
import Transaction from './Transaction';
import '../styles/App.css';

class AccountDetail extends Component {
  render() {
    let account = this.props.user.accounts
    return (
        <div className="card text-center">
          <div className="card-header">
            <h2>Account Information</h2>
          </div>
          <div className="card-body">
            <h2 className="card-title">{this.props.account.accountType} account 
              for {this.props.user.name} ... </h2>
            <div className="card-text">
              Balance: {this.props.account.balance}
            </div>
          </div>
            <Transaction/>            
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state.selectedAccount", state.selectedAccount);
  return {user: state.selectedUser, account: state.selectedAccount};
}

function mapDispatchToProps(dispatch) {
  return {
    withdrawFunds: function(amount) {
      dispatch(withdrawFunds(amount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
