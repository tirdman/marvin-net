import { all } from 'redux-saga/effects';

import peopleSagas from 'sagas/people';
import planetsSagas from 'sagas/planets';
import filmsSagas from 'sagas/films';

export default function* rootSaga() {
  yield all([
    ...peopleSagas,
    ...planetsSagas,
    ...filmsSagas,
  ]);
}
