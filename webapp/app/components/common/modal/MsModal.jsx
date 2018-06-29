import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

class MsModal extends React.Component {
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

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.cancelCallback}>
          <ModalHeader toggle={this.props.cancelCallback}>{this.props.modalTitle}</ModalHeader>
          <ModalBody>
            {this.props.body}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.okCallback}>{this.props.okButtonLabel}</Button>{' '}
            <Button color="secondary" onClick={this.props.cancelCallback}>{this.props.cancelButtonLabel}</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


MsModal.propTypes= {
  okButtonLabel: PropTypes.string.isRequired,
  cancelButtonLabel: PropTypes.string.isRequired,
  body: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
  okCallback: PropTypes.func.isRequired,
  cancelCallback: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired
};

export default MsModal;
