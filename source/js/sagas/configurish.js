import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_DEVICE_DETAILS_START,
  GET_DEVICE_DETAILS_ERROR,
  GET_DEVICE_DETAILS_SUCCESS
} from 'actions/configurish';
import api from 'api/configurish';

// -------- Get people

function createGetDeviceDetails(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      // console.log("getFilmsSaga===");
      const data = yield call(() => api.getDeviceDetails(options.id));
      const action = { type: GET_DEVICE_DETAILS_SUCCESS, data };

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_DEVICE_DETAILS_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getDeviceDetails = createGetDeviceDetails();
export const getDeviceDetailsServer = createGetDeviceDetails(true);


export function* getDeviceDetailsWatcher() {
  yield takeLatest(GET_DEVICE_DETAILS_START, getDeviceDetails);
}


export default [
  getDeviceDetailsWatcher(),
];
