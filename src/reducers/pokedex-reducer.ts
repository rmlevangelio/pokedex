import { Action } from "redux-actions";

import * as ActionTypes from '../actions/action-types';
import { FetchResultState } from '../models/pokedex-models';

export interface State {
  isFetchingResults: boolean;
  info: object[];
  list: object[];
  output: FetchResultState;
}

export const initialState: State = {
  isFetchingResults: false,
  info: [],
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

    case ActionTypes.FETCH_INFO_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.info[action.payload.id] = action.payload;
      return Object.assign(state, newState);
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
