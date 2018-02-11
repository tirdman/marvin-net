import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_FILMS_START,
  GET_FILMS_ERROR,
  GET_FILMS_SUCCESS,
} from 'actions/films';
import api from 'api';

// -------- Get people

function createGetFilms(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      // console.log("getFilmsSaga===");
      const data = yield call(() => api.getFilms(options.id));
      const action = { type: GET_FILMS_SUCCESS, data };

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_FILMS_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getFilms = createGetFilms();
export const getFilmsServer = createGetFilms(true);


export function* getFilmsWatcher() {
  yield takeLatest(GET_FILMS_START, getFilms);
}


export default [
  getFilmsWatcher(),
];
