import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as usersActions from '../../../actions/usersActions';
import Footer from './../partials/footer/Footer';
import Header from './../partials/header/Header';
import ActionButtons from '../ActionButtons/ActionButtons';

export class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedRow: [],
      user: {}
    };

    this.setSelectedRow = this.setSelectedRow.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  setSelectedRow(row) {
    this.setState({
      selectedRow: [row.id],
    });
    this.props.selectUser(row);
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
              />
            </Col>
          </Row>
          <BootstrapTable
            keyField='id'
            data={ this.props.users }
            columns={ columns }
            selectRow={ selectRow }
            pagination={ paginationFactory() }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func,
  selectUser: PropTypes.func
};

function mapStateToProps(state) {
  return {
    users: state.users.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(usersActions, dispatch)
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUsers() {
//       dispatch(usersActions.getUsers());
//     },
//     selectUser (user) {
//       dispatch(usersActions.selectUser(user));
//     }
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
