import initialState from './initialState';
import PropTypes from 'prop-types';
import React from 'react';
import { cloneDeep, extend } from 'lodash';
import { reducers } from './reducers';

const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props, context) {
    super(props, context);

    let state = cloneDeep(initialState);
    this.state = extend(state, {
      dispatch: action => {
        this.setState(state => reducers(state, action));
      }
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AppConsumer = AppContext.Consumer;
