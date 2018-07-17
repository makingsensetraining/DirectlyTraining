import React from 'react';
import Main from './Main';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

function setup(entries) {
  return mount(
    <MemoryRouter initialEntries={entries}>
      <Main />
    </MemoryRouter>
  );
}

describe('<Main /> component', () => {

  it('renders itself', () => {
    const wrapper = setup(['/test']);

    expect(wrapper.find('Switch')).toHaveLength(1);
    expect(wrapper.find('Route')).toHaveLength(1);
  });

  it('should render not found component', () => {
    const wrapper = setup(['/not-found']);

    expect(wrapper.find('Switch')).toHaveLength(1);
    expect(wrapper.find('Route')).toHaveLength(1);
    expect(wrapper.find('NotFoundPage')).toHaveLength(1);
  });
});
