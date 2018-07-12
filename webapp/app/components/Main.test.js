import React from 'react';
import { shallow } from 'enzyme';
import keys from 'lodash/keys';
import { Main, mapDispatchToProps } from './Main';

function setup(props) {
  return shallow(<Main {...props} />);
}

describe('<Main /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      usersActions: {}
    });

    expect(wrapper.find('Switch')).toHaveLength(1);
    expect(wrapper.find('Route')).toHaveLength(2);
  });

  describe('mapDispatchToProps functions', () => {
    it('usersActions prop should be defined', () => {
      const dispatch = () => {};
      const props = mapDispatchToProps(dispatch);

      expect(props.usersActions).toBeDefined();
    });

    it('should return the binded actions', () => {
      const dispatch = () => {};
      const expectedActions = [
        'loadingUsersBegin',
        'loadingUsersComplete',
        'getUsersSuccess'
      ];

      const props = mapDispatchToProps(dispatch);

      expect(keys(props.usersActions)).toEqual(expectedActions);
    });
  });
});
