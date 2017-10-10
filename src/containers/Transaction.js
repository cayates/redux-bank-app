import React, {Component} from 'react'

import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';
import { withdrawFunds } from '../store/actions/index';

import { Link } from 'react-router-dom';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.subtractFunds = this.subtractFunds.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  subtractFunds(amount) {
    console.log("amount", amount);
    this.setState({
      modal: !this.state.modal
    });
    this.props.withdrawFunds(amount)
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div className="pl-3">
          <Button color="danger" onClick={this.toggle}>Withdraw Funds</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Would you like to make a withdrawal from your account?</ModalHeader>
            <ModalBody>
              <p>Are you sure you want to withdraw from your {this.props.account.accountType} account? Your current balance is: {this.props.account.balance}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.subtractFunds(5)}>$5</Button>
              <Button color="success" onClick={() => this.subtractFunds(10)}>$10</Button>
              <Button color="info" onClick={() => this.subtractFunds(20)}>$20</Button>
              <Button color="danger" onClick={() => this.subtractFunds(0)}>Cancel</Button>              
            </ModalFooter>
          </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {user: state.selectedUser, account: state.selectedAccount};
}

function mapDispatchToProps(dispatch) {
  return {
    withdrawFunds: function(amount) {
      dispatch(withdrawFunds(amount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)