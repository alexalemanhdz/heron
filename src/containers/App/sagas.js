import { takeLatest, select } from 'redux-saga/effects';
import L from 'leaflet';
import { INIT_SUGGESTIONS_FETCH } from './constants';

function* fetchSuggestions() {
  const query = yield select((state) => state.query);
  const geocoder = yield new L.Control.Geocoder.Nominatim();
  geocoder.geocode(query, (results) => {
    console.log(results);
  });
}

function* appSaga() {
  yield takeLatest(INIT_SUGGESTIONS_FETCH, fetchSuggestions);
}

export default appSaga;
