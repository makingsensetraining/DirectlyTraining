import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const MsModal = ({isOpen, cancelCallback, modalTitle, body, okCallback, okButtonLabel, cancelButtonLabel}) => (
  <Modal isOpen={isOpen} toggle={cancelCallback}>
    <ModalHeader toggle={cancelCallback}>{modalTitle}</ModalHeader>
    <ModalBody>
      {body}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={okCallback}>{okButtonLabel}</Button>{' '}
      <Button color="secondary" onClick={cancelCallback}>{cancelButtonLabel}</Button>
    </ModalFooter>
  </Modal>
);


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
