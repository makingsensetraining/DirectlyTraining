import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Col, Row } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import * as usersActions from '../../../actions/usersActios';
import Footer from './../partials/footer/Footer';
import Header from './../partials/header/Header';
import './HomePage.css';

export class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedUser: []
    };

    this.setSelectedRow = this.setSelectedRow.bind(this);
  }

  componentDidMount() {
    this.props.actions.getUsers();
  }

  setSelectedRow(row) {
    this.setState({
      selectedUser: [row.id]
    });
  }

  render() {
    const columns = [{
      dataField: 'name',
      text: 'Full Name'
    }, {
      dataField: 'email',
      text: 'Email'
    }, {
      dataField: 'mobile',
      text: 'Mobile Number'
    }];

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#c8e6c9',
      selected: this.state.selectedUser,
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
              <Button color="primary">Add</Button>{' '}
              <Button color="info" disabled={ this.state.selectedUser.length === 0 }>Edit</Button>{' '}
              <Button color="danger" disabled={ this.state.selectedUser.length === 0 }>Delete</Button>{' '}
            </Col>
          </Row>
          <BootstrapTable
            keyField='id'
            data={ this.props.users }
            columns={ columns }
            selectRow={ selectRow }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array
};

function mapStateToProps(state) {
  return {
    users: state.users.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
