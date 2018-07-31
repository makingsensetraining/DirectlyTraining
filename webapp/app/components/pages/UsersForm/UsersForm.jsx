import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import FormInput from '../../common/form/FormInput';


class UsersForm extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    })
  };

  static defaultProps = {
    errors: {
      name: '',
      email: ''
    }
  };

  render() {
    const {user, onChange, errors} = this.props;
    const isNameInvalid = (errors.name && errors.name !== '');
    const isEmailInvalid = (errors.email && errors.email !== '');
    const emailFeedback = errors.email || '';
    return (
      <div>
        <div className="container">
          <Row>
            <section>
              <form>
                <FormInput
                  inputId="name"
                  label={i18nService.translate('TEXT.NAME')}
                  onChange={onChange}
                  value={user.name}
                  name="name"
                  placeholder={i18nService.translate('TEXT.NAME')}
                  required={true}
                  invalid={isNameInvalid}
                  feedback={errors.name}
                />
                <FormInput
                  inputId="email"
                  label={i18nService.translate('TEXT.EMAIL')}
                  onChange={onChange}
                  value={user.email}
                  name="email"
                  placeholder={i18nService.translate('TEXT.EMAIL')}
                  required={true}
                  invalid={isEmailInvalid}
                  feedback={emailFeedback}
                />
                <FormInput
                  inputId="skypeId"
                  label={i18nService.translate('TEXT.SKYPE_ID')}
                  onChange={onChange}
                  value={user.skypeId}
                  name="skypeId"
                  placeholder={i18nService.translate('TEXT.SKYPE_ID')}
                />
                <FormInput
                  inputId="phone"
                  label={i18nService.translate('TEXT.PHONE_NUMBER')}
                  onChange={onChange}
                  value={user.phone}
                  name="phone"
                  placeholder={i18nService.translate('TEXT.PHONE_NUMBER')}
                />
              </form>
            </section>
          </Row>
        </div>
      </div>
    );
  }
}

export default UsersForm;
