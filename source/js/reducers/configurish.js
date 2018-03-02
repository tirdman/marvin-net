import { Map } from 'immutable';

import {
  SET_CONFIGURISH_IP,
  GET_DEVICE_DETAILS_START,
  GET_DEVICE_DETAILS_ERROR,
  GET_DEVICE_DETAILS_SUCCESS
} from 'actions/configurish';

const initialState = Map({
  ip: '172.31.3.201',
  loading: false,
  error: null,
  deviceDetails: null,
});

const actionsMap = {
  // Sync action
  [SET_CONFIGURISH_IP]: (state, action) => {
    return state.merge(
      Map({
        ip: action.ip
      })
    );
  },
  // Async action
  [GET_DEVICE_DETAILS_START]: state => {
    return state.merge(
      Map({
        loading: true,
        error: null,
        deviceDetails: null
      })
    );
  },
  [GET_DEVICE_DETAILS_ERROR]: (state, action) => {
    return state.merge(
      Map({
        loading: false,
        deviceDetails: action.error.message
      })
    );
  },
  [GET_DEVICE_DETAILS_SUCCESS]: (state, action) => {
    return state.merge(
      Map({
        loading: false,
        deviceDetails: action.data
      })
    );
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
