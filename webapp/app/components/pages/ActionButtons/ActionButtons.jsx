import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import MsModal from '../../common/modal/MsModal';
import UsersForm from '../UsersForm/UsersForm';
import { EMAIL_REGEXP } from '../../../constants';

import './ActionButtons.scss';

const EMPTY_USER = {
  name: '',
  email: '',
  phone: '',
  skypeId: ''
};

const DEFAULT_USER_MODAL_LABELS = {
  confirmButtonText: i18nService.translate('button.save')
};

export class ActionButtons extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    onConfirm: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      actionType: null,
      user: {...EMPTY_USER, ...props.user},
      isUserModalOpen: false,
      modalTitle: '',
      modalBody: {},
      modalYesLabel: '',
      errors: {}
    };
  }

  componentWillReceiveProps({ user: newUser }) {
    const { user: currentSelectedUser } = this.props;

    if (!this.isUserMatchById(currentSelectedUser, newUser)) {
      this.setState({
        user: {
          ...newUser
        }
      });
    }
  }

  isUserMatchById = (sourceUser = {}, targetUser = {}) => {
    return sourceUser['id'] === targetUser['id'];
  };

  isValidUser = (user) => {
    return user.hasOwnProperty('id') && user.id !== '';
  };

  toggle = () => {
    this.setState({
      isUserModalOpen: !this.state.isUserModalOpen
    });
  };

  toggleAddModal = () => {
    this.setState({
      actionType: 'add',
      user: { ...EMPTY_USER }
    }, this.toggle);
  };

  toggleEditModal = () => {
    this.setState({
      actionType: 'edit'
    }, this.toggle);
  };

  toggleDeleteModal = () => {
    this.setState({
      actionType: 'delete'
    }, this.toggle);
  };

  updateUserState = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  };

  validateForm = () => {
    const { user } = this.state;
    const isValidUsername = user.name !== '';
    const isValidEmail = EMAIL_REGEXP.test(user.email);
    const errors = {};

    if (!isValidUsername) {
      errors.name = 'User name is required';
    }

    if (!isValidEmail) {
      errors.email = 'Email is invalid';
    }

    this.setState({ errors });

    return errors;
  };

  canSubmitForm = () => {
    const errors = this.validateForm();
    return (Object.keys(errors).length === 0 && errors.constructor === Object);
  };

  saveUser = () => {
    if (!this.canSubmitForm()) {
      return;
    }

    if (typeof this.props.onConfirm === 'function') {
      this.props.onConfirm(this.state.actionType, this.state.user)
        .then(() => {
          this.toggle();
        });
    }
  };

  cancel = () => {
    let user = EMPTY_USER;

    if (this.isValidUser(this.props.user) === true) {
      user = this.props.user;
    }

    this.setState({
      user: { ...user },
      errors: {}
    }, this.toggle);
  };

  getModalBody = () => {
    const {
      user,
      errors
    } = this.state;

    if (this.state.actionType === 'delete') {
      return (
        <p>{i18nService.translate('text.delete_user', { name: user.name })}</p>
      );
    }

    return (
      <UsersForm
        onChange={this.updateUserState}
        user={user}
        errors={errors}
      />
    );
  };

  getModalLabels  = (actionType = 'add') => {
    if (actionType === 'delete') {
      return {
        ...DEFAULT_USER_MODAL_LABELS,
        confirmButtonText: i18nService.translate('button.delete')
      };
    }

    return DEFAULT_USER_MODAL_LABELS;
  };

  render() {
    const modalBody = this.getModalBody();
    const isUserEditDisabled = this.isValidUser(this.state.user) === false;

    const modalInfo = {
      ...this.getModalLabels(this.state.actionType),
      title: i18nService.translate('text.action_user_form', {
        action: this.state.actionType
      })
    };

    return (
      <div className="action-buttons">
        <Button
          color="primary"
          onClick={this.toggleAddModal}
        >{i18nService.translate('button.add')}</Button>
        <Button
          color="info"
          disabled={isUserEditDisabled}
          onClick={this.toggleEditModal}
        >{i18nService.translate('button.edit')}</Button>
        <Button
          color="danger"
          disabled={isUserEditDisabled}
          onClick={this.toggleDeleteModal}
        >{i18nService.translate('button.delete')}</Button>
        <MsModal
          okButtonLabel={modalInfo.confirmButtonText}
          cancelButtonLabel={i18nService.translate('button.cancel')}
          body={modalBody}
          isOpen={this.state.isUserModalOpen}
          okCallback={this.saveUser}
          cancelCallback={this.cancel}
          modalTitle={modalInfo.title}
        />
      </div>
    );
  }
}

export function mapStateToProps({ users }) {
  return {
    user: users.selectedUser
  };
}

export default connect(mapStateToProps)(ActionButtons);
