import React from 'react';
import { shallow } from 'enzyme';
import { ActionButtons } from './ActionButtons';

function setup(props) {
  return shallow(
    <ActionButtons
      {...props}
      onCreateUser={jest.fn()}
    />
  );
}

describe('<ActionButtons /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      user: {}
    });
    expect(wrapper.find('Button')).toHaveLength(3);
    expect(wrapper.find('MsModal')).toHaveLength(1);
  });
});
