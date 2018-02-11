import { combineReducers } from 'redux';
import app from 'reducers/app';
import people from 'reducers/people';
import planets from 'reducers/planets';
import films from 'reducers/films';

export default combineReducers({
  app,
  people,
  planets,
  films,
});
