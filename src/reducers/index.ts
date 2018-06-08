import { combineReducers } from 'redux';

import * as fromPokedexReducer from './pokedex-reducer';

export interface AppState {
  pokedexApp: fromPokedexReducer.State;
}

export const initialState: AppState = {
  pokedexApp: fromPokedexReducer.initialState,
}

export const reducers = combineReducers<AppState>({
  pokedexApp: fromPokedexReducer.reducer,
});
