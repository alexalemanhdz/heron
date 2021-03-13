import { takeLatest } from 'redux-saga/effects';
import { UPDATE_SUGGESTIONS } from './constants';

function* appSaga() {
  yield takeLatest(UPDATE_SUGGESTIONS, () => console.log('hola'));
}

export default appSaga;
