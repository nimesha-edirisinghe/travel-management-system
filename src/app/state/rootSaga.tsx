import { all } from 'redux-saga/effects';
import blogSaga from './blog/sagas';
import requestSaga from './request/requestSaga';

export default function* rootSaga() {
  yield all([blogSaga(), requestSaga()]);
}
