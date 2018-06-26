import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

const { USERS } = actionTypes;

const data = [
  {
    id: 1,
    name: 'Emanuel Pereyra',
    email: 'epereyra@makingsense.com',
    mobile: '+5493517333555',
    skypeid: 'emanuelpereyra77'
  },
  {
    id: 2,
    name: 'Javier Pepe',
    email: 'jpepe@makingsense.com',
    mobile: '+54911150276756',
    skypeid: 'javier.pepe'
  },
  {
    id: 3,
    name: 'Mariano Ravinale',
    email: 'mravinale@makingsense.com',
    mobile: '+54999999999',
    skypeid: 'mravinale'
  }];

const initialState = {
  data: []
};

export default handleActions({
  [USERS.GET_ALL]: (state) => ({
    ...state,
    data
  })
}, initialState);
