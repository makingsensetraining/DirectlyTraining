import React from 'react';
import LoginFormTop from './LoginFormTop';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LoginFormTop /> component', () => {
  it('renders itself', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginFormTop />
      </Provider>
    );

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('FormGroup')).toHaveLength(2);
    expect(wrapper.find('Label')).toHaveLength(2);
    expect(wrapper.find('Input')).toHaveLength(2);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});
