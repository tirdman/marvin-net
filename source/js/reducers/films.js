import { Map } from 'immutable';

import {
  GET_FILMS_START,
  GET_FILMS_ERROR,
  GET_FILMS_SUCCESS,
} from 'actions/films';

const initialState = Map({
  loading: false,
  error: null,
  films: null,
});

const actionsMap = {
  // Async action
  [GET_FILMS_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      films: null,
    }));
  },
  [GET_FILMS_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_FILMS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      films: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
