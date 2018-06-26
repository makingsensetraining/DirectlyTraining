import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BootstrapTable from 'react-bootstrap-table-next';
import * as usersActions from '../../../actions/usersActios';
import Footer from './../partials/footer/Footer';
import Header from './../partials/header/Header';

export class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      email: '',
      skypeId: '',
      mobile: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.getUsers();
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
      bgColor: '#c8e6c9'
    };
    
    return (
      <div>
        <Header />
        <div className="container">
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
