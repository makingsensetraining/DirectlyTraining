import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

const FormInput = ({ type, name, placeholder, value, onChange, label, inputId }) => {  
  return (
    <FormGroup>
      <Label>{label}</Label>
      <label htmlFor={inputId} className="sr-only">{label}</label>
      <Input
        id={inputId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </FormGroup>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  inputId: PropTypes.string
};

export default FormInput;
