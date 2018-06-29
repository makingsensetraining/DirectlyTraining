import React from 'react';
import { shallow } from 'enzyme';
import MsModal from './MsModal';

function setup(props) {
  return shallow(<MsModal {...props} />);
}

describe('<MsModal /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      okButtonLabel: 'Ok',
      cancelButtonLabel: 'cancel',
      body: {},
      isOpen: false,
      modalTitle: 'Modal Test',
      okCallback: () => {},
      cancelCallback: () => {}
    });
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
});
