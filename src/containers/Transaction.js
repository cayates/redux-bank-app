import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

import { connect } from 'react-redux';
import { withdrawFunds }  from '../store/actions/index';

import { bindActionCreators } from 'redux';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
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
    console.log('this is the state of the modal: >>>', this.state.modal)
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Withdraw Funds</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>
            <p>Pick an amount to withdraw</p>
        </ModalHeader>
          <ModalBody>
            <p>Modal body</p>
          </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={this.toggle}>$5.00</Button>
            <Button color="secondary" onClick={this.toggle}>$10.00</Button>
            <Button color="secondary" onClick={this.toggle}>$20.00</Button>
        </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log('this is state.selectedUser >>>>>', state.selectedUser)
    console.log('this is state.selectedAccount >>>>>', state.selectedAccount)    
    return {
      selectedUser: state.selectedUser,
      account: state.selectedAccount
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      withdrawFunds: withdrawFunds
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Transaction);