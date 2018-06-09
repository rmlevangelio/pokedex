import { Action } from "redux-actions";

import * as ActionTypes from '../actions/action-types';
import { FetchResultState } from '../models/pokedex-models';

export interface State {
  isFetchingResults: boolean;
  pageLoaded: 'list' | 'info';
  info: object;
  selectedPokemon: any;
  list: object[];
  output: FetchResultState;
}

export const initialState: State = {
  isFetchingResults: false,
  pageLoaded: 'list',
  info: {},
  selectedPokemon: '',
  list: [],
  output: {
    results: [],
    count: 0,
    next: null,
    previous: null,
  },
}

export function reducer(state: State = initialState, action: Action<any>) {
  switch (action.type) {
    case ActionTypes.REQUEST_FETCH: {
      return { ...state, isFetchingResults: true }
    }

    case ActionTypes.FETCH_SUCCESS: {
      return { ...state, isFetchingResults: false }
    }

    case ActionTypes.FETCH_RESULTS_SUCCESS: {
      const { results, count, next, previous } = action.payload;
      return { ...state, output: { results, count, next, previous }}
    }

    case ActionTypes.UPDATE_SELECTED_POKEMON: {
      return { ...state, selectedPokemon: action.payload }
    }

    case ActionTypes.UPDATE_LIST: {
      return { ...state, list: action.payload }
    }

    case ActionTypes.CLEAR_LIST: {
      return { ...state, list: [] }
    }

    default:
      return state
  }
}  
