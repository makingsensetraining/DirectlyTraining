import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

class MsModal extends React.PureComponent {
  static propTypes= {
    okButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string,
    body: PropTypes.any.isRequired,
    isOpen: PropTypes.bool.isRequired,
    okCallback: PropTypes.func,
    cancelCallback: PropTypes.func,
    modalTitle: PropTypes.string.isRequired,
    showFooter: PropTypes.bool
  };

  static defaultProps = {
    showFooter: true
  };

  render() {
    const {isOpen, cancelCallback, modalTitle, body } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={cancelCallback}>
        <ModalHeader toggle={cancelCallback}>{modalTitle}</ModalHeader>
        <ModalBody>
          {body}
        </ModalBody>
        {this.renderFooter()}
      </Modal>
    );
  }

  renderFooter() {
    const {
      cancelCallback,
      cancelButtonLabel,
      okCallback,
      okButtonLabel
    } = this.props;
    let dataToRender = null;

    if (this.props.showFooter) {
      dataToRender = (
        <ModalFooter>
          <Button color="primary" onClick={okCallback}>{okButtonLabel}</Button>{' '}
          <Button color="secondary" onClick={cancelCallback}>{cancelButtonLabel}</Button>
        </ModalFooter>
      );
    }

    return dataToRender;
  }
}

export default MsModal;
