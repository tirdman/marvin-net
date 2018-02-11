import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_PLANETS_START,
  GET_PLANETS_ERROR,
  GET_PLANETS_SUCCESS,
} from 'actions/planets';
import api from 'api';

// -------- Get people

function createGetPlanets(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getPlanets(options.id));
      const action = { type: GET_PLANETS_SUCCESS, data };

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_PLANETS_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getPlanets = createGetPlanets();
export const getPlanetsServer = createGetPlanets(true);


export function* getPlanetsWatcher() {
  yield takeLatest(GET_PLANETS_START, getPlanets);
}


export default [
  getPlanetsWatcher(),
];
