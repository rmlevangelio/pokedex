import { fork } from 'redux-saga/effects';
import { onFetchRequested } from './pokedex-saga';

export function* startup() {
  yield fork(onFetchRequested);
}

export default function* root() {
  yield fork(startup);
}
