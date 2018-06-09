import { put, takeEvery, call } from 'redux-saga/effects';

import * as ActionTypes from '../actions/action-types';

const fetchPokemonFromApi = (url: string) =>
    fetch(url)
      .then(response => response.json())
      .then(json => json);

function* fetchResults(action: any) {
  try {
    const results = yield call(fetchPokemonFromApi, action.payload.url);

    if (results.count !== undefined) {
      yield put({ type: ActionTypes.FETCH_RESULTS_SUCCESS, payload: results});
    }

    yield put({ type: ActionTypes.FETCH_SUCCESS });
  } catch (e) {
    yield put({type: ActionTypes.FETCH_FAILED, message: e.message});
  }
}

export function* onFetchRequested() {
  yield takeEvery(ActionTypes.REQUEST_FETCH, fetchResults);
}
