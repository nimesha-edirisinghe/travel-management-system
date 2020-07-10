import { put, select, take, takeLatest } from 'redux-saga/effects';
import { DISPATCH_TOAST_SUCCESS } from 'app/common/constants';
import { MAKE_API_REQUEST, SUCCESS } from '../request/types';
import { DISPATCH_TOAST_FAILURE, DISPATCH_TOAST_SUCESS } from '../toast/types';
import { UserListActionTypes, GET_USER_DETAILS } from './types';
import {} from 'app/api/api';

// saga for get profile details
function* getProfileDetails(action: UserListActionTypes) {
  try {
    const payload = {
      api: '',
      action: action.type,
      payload: action.payload,
    };

    yield put({ type: MAKE_API_REQUEST, payload });
    const result = yield take(action.type + SUCCESS);

    if (result.payload && result.payload.status === 'success') {
      yield put({
        type: DISPATCH_TOAST_SUCCESS,
        message: 'Successfully fetch',
      });
    }
  } catch (e) {
    yield put({ type: DISPATCH_TOAST_FAILURE, message: e.message });
  }
}

export default function* watcherSaga() {
  yield takeLatest(GET_USER_DETAILS, getProfileDetails);
}
