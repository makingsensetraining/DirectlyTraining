import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

const { USERS } = actionTypes;

const data = [
  {
    id: 1,
    name: 'Emanuel Pereyra',
    email: 'epereyra@makingsense.com',
    phone: '+5493517333555',
    skypeId: 'emanuelpereyra77'
  },
  {
    id: 2,
    name: 'Javier Pepe',
    email: 'jpepe@makingsense.com',
    phone: '+54911150276756',
    skypeId: 'javier.pepe'
  },
  {
    id: 3,
    name: 'Mariano Ravinale',
    email: 'mravinale@makingsense.com',
    phone: '+54999999999',
    skypeId: 'mravinale'
  }];

const initialState = {
  data: [],
  selectedUser: {}
};

export default handleActions({
  [USERS.GET_ALL]: (state) => ({
    ...state,
    data
  }),
  [USERS.SELECT]: (state, action) => ({
    ...state,
    selectedUser: action.payload
  })
}, initialState);
