import React from 'react';
import Header from './../partials/header/Header';
import ActionButtons from '../ActionButtons/ActionButtons';
import BootstrapTable from 'react-bootstrap-table-next';
import PropTypes from 'prop-types';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Col, Row } from 'reactstrap';
import { get } from 'lodash';
import './HomePage.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRow: [],
      user: {},
      users: get(props, 'context.users', [])
    };

    this.setSelectedRow = this.setSelectedRow.bind(this);
    this.handleUserActionType = this.handleUserActionType.bind(this);
  }

  componentDidMount() {
    this.props.usersActions.getUsers();
  }

  setSelectedRow(user) {
    this.setState({
      selectedRow: [user.id]
    }, () => {
      if (typeof this.props.usersActions.selectUser === 'function') {
        this.props.usersActions.selectUser(user);
      }
    });
  }

  handleUserActionType(type = 'add', user) {
    const { usersActions } = this.props;

    switch(type) {
      case 'add':
        return usersActions.createUser(user);
      case 'edit':
        return usersActions.updateUser(user);
      case 'delete':
        return usersActions.deleteUser(user);
      default:
        throw new TypeError(`Unhandled User Action Type ${type}`);
    }
  }

  render() {
    const columns = [{
      dataField: 'name',
      text: 'Full Name'
    }, {
      dataField: 'email',
      text: 'Email'
    }, {
      dataField: 'phone',
      text: 'Phone Number'
    }];

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#c8e6c9',
      selected: this.state.selectedRow,
      onSelect: this.setSelectedRow
    };

    return (
      <div>
        <Header />
        <div className="container">
          <Row>
            <Col md="8">
              <h4>Users List</h4>
            </Col>
            <Col md="4">
              <ActionButtons
                user={this.state.user}
                onConfirm={this.handleUserActionType}
              />
            </Col>
          </Row>
          <BootstrapTable
            keyField='id'
            data={ this.state.users }
            columns={ columns }
            selectRow={ selectRow }
            pagination={ paginationFactory() }
          />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  context: PropTypes.object.isRequired,
  usersActions: PropTypes.object.isRequired
};

export default HomePage;
