import { Map } from 'immutable';

import {
  GET_PLANETS_START,
  GET_PLANETS_ERROR,
  GET_PLANETS_SUCCESS,
} from 'actions/planets';

const initialState = Map({
  loading: false,
  error: null,
  planets: null,
});

const actionsMap = {
  // Async action
  [GET_PLANETS_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      planets: null,
    }));
  },
  [GET_PLANETS_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_PLANETS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      planets: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
