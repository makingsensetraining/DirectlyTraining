/**
 * una manera mas escalable de manejar estas constantes es separarlas por tipo, ej.:
 * --
 * action types = {
 *  AUTH: {
 *      START: 'AUTH_LOGIN_BEGIN',
 *      SUCCESS: 'AUTH_LOGIN_SUCCESS',
 *      FAILED: 'AUTH_LOGIN_FAILED'
 *  }
 * --
 * de esta manera se puede diferenciar rapido las acciones repetitivas sin necesidad de darles nombres mas complejos.
 * Otra cosa recomendable es cambiar de nomenclatura para hacerlas mas legibles, especialmente para las devtools. ej.:
 * action types = {
 *  AUTH: {
 *      START: '[auth] start',
 *      SUCCESS: '[auth] success',
 *      FAILED: '[auth] failed'
 *  }
 * --
 * una nomenclatura como esa tambien hace mas dificil repetir nombres de acciones
 * }
 * */
export const LOADING_USERS_BEGIN = 'LOADING_USERS_BEGIN';
export const LOADING_USERS_COMPLETE = 'LOADING_USERS_COMPLETE';
export const LOADING_USERS_FAILED = 'LOADING_USERS_FAILED';
export const CREATE_USERS_SUCCESS = 'CREATE_USERS_SUCCESS';
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const UPDATE_USERS_SUCCESS = 'UPDATE_USERS_SUCCESS';
export const SELECT_USERS_SUCCESS = 'SELECT_USERS_SUCCESS';
export const AUTH_LOGIN_BEGIN = 'AUTH_LOGIN_BEGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
