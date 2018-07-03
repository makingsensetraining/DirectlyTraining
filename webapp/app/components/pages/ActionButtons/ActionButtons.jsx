import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';
import isEmpty from 'lodash/isEmpty';
import MsModal from '../../common/modal/MsModal';
import UsersForm from '../UsersForm/UsersForm';
import { EMAIL_REGEX } from '../../../constants';

const EMPTY_USER = {
  id: '',
  name: '',
  email: '',
  phone: '',
  skypeId: ''
};

const FORM_ERRORS = {
  name: '',
  email: {
    invalid: '',
    missing: ''
  }
};

export class ActionButtons extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {...EMPTY_USER, ...props.user},
      modal: false,
      modalTitle: '',
      modalBody: {},
      modalYesLabel: '',
      errors: cloneDeep(FORM_ERRORS)
    };

    this.toggle = this.toggle.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.noUserSelected = this.noUserSelected.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.cancel = this.cancel.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id !== nextProps.user.id) {
      this.setState({
        user: {
          ...nextProps.user
        }
      });
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleAddModal() {
    this.setState({
      user: EMPTY_USER,
      modalBody:'',
      modalTitle: 'Add User',
      modalYesLabel: 'Save'
    }, this.toggle);
  }

  toggleEditModal() {
    this.setState({
      modalBody:'',
      modalTitle: 'Edit User',
      modalYesLabel: 'Save'
    }, this.toggle);
  }

  toggleDeleteModal() {
    this.setState({
      modalBody: `Are you sure to delete User ${this.props.user.name}`,
      modalTitle: 'Delete User',
      modalYesLabel: 'Delete'
    }, this.toggle);
  }

  noUserSelected() {
    return isEmpty(this.props.user);
  }

  updateUserState(event) {
    const user = {
      ...this.state.user,
      [event.target.name]: event.target.value
    };
    return this.setState({user});
  }

  isFormValid() {
    let checkErrors = cloneDeep(FORM_ERRORS);
    if (this.state.user.name.length === 0) {
      checkErrors.name = 'User name is required';
    }

    if (this.state.user.email.length === 0) {
      checkErrors.email.missing = 'Email is required';
    }

    if (this.state.user.email.length > 0 &&
      !EMAIL_REGEX.test(this.state.user.email)) {
      checkErrors.email.invalid = 'Email is invalid';
    }

    this.setState({errors: checkErrors});
  }

  saveUser() {
    if (!this.isFormValid()) {
      return;
    }
    // save the user on the server
    this.toggle();
  }

  cancel() {

    this.setState({
      user: cloneDeep(isEmpty(this.props.user) ? EMPTY_USER : this.props.user),
      errors: cloneDeep(FORM_ERRORS)
    }, this.toggle());
  }

  render() {
    const usersForm = <UsersForm
      onChange={this.updateUserState}
      user={this.state.user}
      errors={this.state.errors}
    />;
    const modalBody = this.state.modalBody !== '' ? this.state.modalBody : usersForm;
    return (
      <div>
        <Button color="primary" onClick={this.toggleAddModal}>Add</Button>{' '}
        <Button color="info" onClick={this.toggleEditModal} disabled={this.noUserSelected()}>Edit</Button>{' '}
        <Button color="danger" onClick={this.toggleDeleteModal} disabled={this.noUserSelected()}>Delete</Button>{' '}
        <MsModal
          okButtonLabel={this.state.modalYesLabel}
          cancelButtonLabel='Cancel'
          body={modalBody}
          isOpen={this.state.modal}
          okCallback={this.saveUser}
          cancelCallback={this.cancel}
          modalTitle={this.state.modalTitle}
        />
      </div>
    );
  }
}

ActionButtons.propTypes = {
  user: PropTypes.object,
  onCreateUser: PropTypes.func
};

function mapStateToProps(state) {
  return {
    user: state.users.selectedUser
  };
}

export default connect(mapStateToProps)(ActionButtons);

