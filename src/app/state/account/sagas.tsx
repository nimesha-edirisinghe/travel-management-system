import { put, select, take, takeLatest } from 'redux-saga/effects';
import { MAKE_API_REQUEST, SUCCESS } from '../request/types';
import { DISPATCH_TOAST_FAILURE } from '../toast/types';
import { UserListActionTypes, GET_USER_DETAILS } from './types';
import {} from 'app/api/api';

function* getOfferBuckets(action: UserListActionTypes) {
  try {
    const payload = {
      api: '',
      action: action.type,
      payload: action.payload,
    };

    yield put({ type: MAKE_API_REQUEST, payload });
  } catch (e) {
    yield put({ type: DISPATCH_TOAST_FAILURE, message: e.message });
  }
}

export default function* watcherSaga() {
  yield takeLatest(GET_USER_DETAILS, getOfferBuckets);
}
