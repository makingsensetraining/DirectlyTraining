import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row } from 'reactstrap';
import * as authActions from '../../../actions/authActions';
import Footer from './../partials/footer/Footer';
import Header from './../partials/header/Header';
import InputForm from '../../common/form/InputForm';


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

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Row>
            <section>
              <form>
                <InputForm 
                  inputId="name"
                  label="Name"
                  onChange={this.handleOnChange}
                  name="name"
                  placeholder="Full Name"
                />
                <InputForm 
                  inputId="email"
                  label="Email"
                  onChange={this.handleOnChange}
                  name="email"
                  placeholder="Email"
                />
                <InputForm 
                  inputId="skypeId"
                  label="Skype Id"
                  onChange={this.handleOnChange}
                  name="skypeId"
                  placeholder="skype Id"
                />
                <InputForm 
                  inputId="mobile"
                  label="Mobile Number"
                  onChange={this.handleOnChange}
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Create User</button>
              </form>
            </section>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
