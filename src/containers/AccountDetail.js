import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount }  from '../store/actions/index';
import { Link } from 'react-router-dom';

import Transaction from './Transaction';

import { bindActionCreators } from 'redux';

class AccountDetail extends Component {
    render(){
        console.log(this.props.user.accounts)
        let arrayOfAccountObjects = this.props.user.accounts.map((typeOfAccount)=>{
            return (
                    <div key={typeOfAccount.id}>
                    </div>  
            )
        })
            return (
                <div className="col-md-6">
                  <h4 className= "card-title">Account Information</h4>
                    <div className= "card-text">
                    <p>{this.props.account.accountType} for {this.props.user.name}</p>
                    <p>{this.props.account.balance}</p>
                    <Link className="btn btn-primary" to={`/users`}>Back to User Details</Link>                                
                    </div>
                      {arrayOfAccountObjects}
                    <Transaction />
              </div>
            )
    }
}

function mapStateToProps(state) {
    console.log(state.selectedAccount.accountType)
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
