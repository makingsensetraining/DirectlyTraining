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
      users: get(props.context, 'users', [])
    };

    this.setSelectedRow = this.setSelectedRow.bind(this);
    this.handleUserActionType = this.handleUserActionType.bind(this);
  }

  componentDidMount() {
    if (this.props.context && this.props.context.getUsers) {
      this.props.context.getUsers();
    }
  }

  setSelectedRow(user) {
    this.setState({
      selectedRow: [user.id]
    }, () => {
      if (this.props.context && this.props.context.selectUser) {
        this.props.context.selectUser(user);
      }
    });
  }

  handleUserActionType(type = 'add', user) {
    const context = this.props.context;

    switch(type) {
      case 'add':
        return context.createUser(user);
      case 'edit':
        return context.updateUser(user);
      case 'delete':
        return context.deleteUser(user);
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
                user={this.state.users.selectedUser}
                onConfirm={this.handleUserActionType}
              />
            </Col>
          </Row>
          <BootstrapTable
            keyField='id'
            data={ this.state.users.data }
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
  context: PropTypes.object.isRequired
};

export default HomePage;
