import formValidator from './formValidator';
import { formRules } from './formRules';

describe('Form validator class', () => {

  it('Should validate login form', () => {
    const validator = new formValidator(formRules.login);
    const validState = validator.validate({
      username: 'John',
      password: 'Doe1234'
    });

    expect(validState).toEqual({
      isValid: true,
      password: {
        isValid: true,
        message: ''
      },
      username: {
        isValid: true,
        message: ''
      }
    });
  });

  it('Should validate login form for empty fields', () => {
    const validator = new formValidator(formRules.login);
    const emptyState = validator.validate({
      username: '',
      password: ''
    });

    expect(emptyState).toEqual({
      isValid: false,
      password: {
        isValid: false,
        message: 'Please provide a valid password.'
      },
      username: {
        isValid: false,
        message: 'Please provide a valid username.'
      }
    });
  });

  it('Should validate login form with min length', () => {
    const validator = new formValidator(formRules.login);
    const lengthState = validator.validate({
      username: 'j',
      password: 'd'
    });

    expect(lengthState).toEqual({
      isValid: false,
      password: {
        isValid: false,
        message: 'Password must be between 4 and 35 characters.'
      },
      username: {
        isValid: false,
        message: 'Username must be between 4 and 35 characters.'
      }
    });
  });

  it('Should validate user form', () => {
    const validator = new formValidator(formRules.user);
    const validState = validator.validate({
      name: 'john',
      email: 'johndoe@gmail.com',
      phone: '12345',
      skypeId: ''
    });

    expect(validState).toEqual({
      isValid: true,
      email: {
        isValid: true,
        message: ''
      },
      name: {
        isValid: true,
        message: ''
      },
      phone: {
        isValid: true,
        message: ''
      },
      skypeId: {
        isValid: true,
        message: ''
      }
    });
  });

  it('Should validate user form for empty fields', () => {
    const validator = new formValidator(formRules.user);
    const emptyState = validator.validate({
      name: '',
      email: '',
      skypeId: '',
      phone: ''
    });

    expect(emptyState).toEqual({
      isValid: false,
      email: {
        isValid: false,
        message: 'Please provide an email address.'
      },
      name: {
        isValid: false,
        message: 'Please provide a name.'
      },
      phone: {
        isValid: false,
        message: 'Please provide a phone number.'
      },
      skypeId: {
        isValid: true,
        message: ''
      }
    });
  });

  it('Should validate user form with min length', () => {
    const validator = new formValidator(formRules.user);
    const lengthState = validator.validate({
      name: 'n',
      email: 'johndoe@gmail.com',
      skypeId: 's',
      phone: '1'
    });

    expect(lengthState).toEqual({
      isValid: false,
      email: {
        isValid: true,
        message: ''
      },
      name: {
        isValid: false,
        message: 'Name must be between 4 and 35 characters.'
      },
      phone: {
        isValid: false,
        message: 'Phone must be between 4 and 35 characters.'
      },
      skypeId: {
        isValid: false,
        message: 'Skype ID must be between 4 and 35 characters.'
      }
    });
  });

  it('Should extend options from validator', () => {
    let validator = new formValidator(formRules.login);
    const emptyStateNotRequired = validator.validate({
      username: '',
      password: ''
    }, {
      username: {
        required: false
      }
    });

    expect(emptyStateNotRequired).toEqual({
      isValid: false,
      password: {
        isValid: false,
        message: 'Please provide a valid password.'
      },
      username: {
        isValid: true,
        message: ''
      }
    });
  });

  it('Should not return state when properties are differents', () => {
    let validator = new formValidator(formRules.login);
    const emptyState = validator.validate({
      test: ''
    });

    expect(emptyState).toEqual({
      isValid: true
    });
  });
});
