import { Action } from 'redux-actions';

import * as ActionTypes from './action-types';

export type createRequestAction = Action<any>;
export function createRequest(payload: any) {
  return {
    type: ActionTypes.REQUEST_FETCH,
    payload
  };
}

export type onFetchResultsAction = Action<any>;
export function onFetchResults(payload: any) {
  return {
    type: ActionTypes.FETCH_RESULTS_SUCCESS,
    payload
  };
}

export type onSuccessRequestAction = Action<any>;
export function onSuccessRequest(payload: any) {
  return {
    type: ActionTypes.FETCH_SUCCESS,
    payload
  };
}

export type updateSelectedPokemonAction = Action<any>;
export function updateSelectedPokemon(payload: any) {
  return {
    type: ActionTypes.UPDATE_SELECTED_POKEMON,
    payload
  };
}

export type updateListAction = Action<any>;
export function updateList(payload: any) {
  return {
    type: ActionTypes.UPDATE_LIST,
    payload
  };
}

export type clearListAction = Action<any>;
export function clearList(payload: any) {
  return {
    type: ActionTypes.CLEAR_LIST,
    payload
  };
}
