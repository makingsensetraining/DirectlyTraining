import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import FormInput from '../../common/form/FormInput';


const UsersForm = ({user, onChange, errors}) => {
  const isNameInvalid = errors.name !== '';
  const isEmailInvalid =  errors.email.invalid !== '' || errors.email.missing !== '';
  const emailFeedback = errors.email.invalid || errors.email.missing;
  return (
    <div>
      <div className="container">
        <Row>
          <section>
            <form>
              <FormInput
                inputId="name"
                label="Name"
                onChange={onChange}
                value={user.name}
                name="name"
                placeholder="Full Name"
                required={true}
                invalid={isNameInvalid}
                feedback={errors.name}
              />
              <FormInput
                inputId="email"
                label="Email"
                onChange={onChange}
                value={user.email}
                name="email"
                placeholder="Email"
                required={true}
                invalid={isEmailInvalid}
                feedback={emailFeedback}
              />
              <FormInput
                inputId="skypeId"
                label="Skype Id"
                onChange={onChange}
                value={user.skypeId}
                name="skypeId"
                placeholder="skype Id"
              />
              <FormInput
                inputId="phone"
                label="Phone Number"
                onChange={onChange}
                value={user.phone}
                name="phone"
                placeholder="Phone Number"
              />
            </form>
          </section>
        </Row>
      </div>
    </div>
  );
};

UsersForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object
};

UsersForm.defaultProps = {
  errors: {
    name: '',
    email: {
      invalid: '',
      missing: ''
    }
  }
};
export default UsersForm;
