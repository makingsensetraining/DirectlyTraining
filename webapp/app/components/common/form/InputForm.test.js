import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './InputForm';

function setup(props) {
  return shallow(<InputForm {...props} />);
}

describe('<InputForm /> component', () => {
  it('renders itself', () => {
    const wrapper = setup();
    expect(wrapper.find('Input')).toHaveLength(1);
  });

  it('uses "type" attribute', () => {
    const type = 'email';
    const wrapper = setup({
      type: type
    });
  
    expect(wrapper.find('Input').prop('type')).toEqual(type);
  });

  it('uses "name" attribute', () => {
    const name = 'test';
    const wrapper = setup({
      name: name
    });
  
    expect(wrapper.find('Input').prop('name')).toEqual(name);
  });

  it('uses "placeholder" attribute', () => {
    const placeholder = 'test';
    const wrapper = setup({
      placeholder: placeholder
    });
  
    expect(wrapper.find('Input').prop('placeholder')).toEqual(placeholder);
  });
});
