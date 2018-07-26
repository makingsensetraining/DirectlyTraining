import { some } from 'lodash';
import validator from 'validator';

export default class FormValidator {

  constructor(validations) {
    // validations rules specific to a form, type array
    this.validations = validations;
  }

  getValidation = (state) => {
    let validation = {};

    this.validations.forEach(rule => {
      if (state.hasOwnProperty(rule.field)) {
        validation[rule.field] = {
          isValid: true,
          message: ''
        };
      }
    });

    return { isValid: true, ...validation };
  }

  validate = (state) => {
    let validation = this.getValidation(state);

    this.validations.forEach(rule => {
      if (state.hasOwnProperty(rule.field)) {
        const fieldValue = state[rule.field].toString();
        const args = rule.args || [];
        const validationMethod = (typeof rule.method === 'string') ?
          validator[rule.method] : rule.method;

        if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
          validation[rule.field] = {
            isValid: false,
            message: rule.message
          };
        }
      }
    });

    validation.isValid = (!some(validation, { isValid: false }));

    return validation;
  }
}
