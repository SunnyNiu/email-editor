import { all, call } from 'redux-saga/effects';
import filePathSaga from './filePathSaga';
import textSaga from './contentTextSaga';

export default function* rootSaga() {
  yield all([call(filePathSaga), call(textSaga)]);
}
