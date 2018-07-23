import React from 'react';
import LoginFormMain from './LoginFormMain';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});

function setup(props) {
  return mount(
    <Provider store={store}>
      <LoginFormMain {...props} />
    </Provider>
  );
}

describe('<LoginFormMain /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      auth: {
        error: false,
        errorMessage: null
      }
    });

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('FormGroup')).toHaveLength(2);
    expect(wrapper.find('Label')).toHaveLength(2);
    expect(wrapper.find('Input')).toHaveLength(2);
    expect(wrapper.find('Button')).toHaveLength(1);
    expect(wrapper.find('.alert alert-danger')).toHaveLength(0);
  });
});
