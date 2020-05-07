import { put, call, takeEvery } from 'redux-saga/effects';
import { addHeader } from 'app/api/api';
import { GENERIC_ERROR_MESSAGE } from 'app/common/constants';
import { getAccessTokenFromStorage } from 'app/common/helpers';
import {
  MAKE_API_REQUEST,
  MAKE_API_REQUEST_SUCCESS,
  MAKE_API_REQUEST_FAILURE,
  SUCCESS,
  FAILURE,
} from './types';
import { DISPATCH_TOAST_FAILURE } from '../toast/types';

function* networkRequestSaga(action) {
  try {
    const accessToken = getAccessTokenFromStorage();

    if (accessToken) {
      addHeader(`Bearer ${accessToken}`);
    } else {
      yield put({ type: action.payload.action + FAILURE });
      return;
    }

    const response = yield call(action.payload.api, action.payload.payload);
    const { data } = response;

    if (process.env.REACT_APP_ENV_NAME === 'development') {
      console.log('REQUEST SAGA', response);
    }

    if (response.status === 200 || response.status === 201) {
      if (response.data) {
        yield put({ type: action.payload.action + SUCCESS, payload: data });
        yield put({ type: MAKE_API_REQUEST_SUCCESS });
      } else {
        yield put({
          type: DISPATCH_TOAST_FAILURE,
          message: response.data.message || response.data.detailMessage,
        });
        yield put({ type: action.payload.action + FAILURE });
      }
    } else if (response.status === 401) {
      yield put({ type: action.payload.action + FAILURE, payload: data });
      // yield put({ type: LOGOUT });
    } else if (response.status === 404) {
      const message = response.originalError && response.originalError.message;
      yield put({ type: DISPATCH_TOAST_FAILURE, message });
      yield put({ type: action.payload.action + FAILURE });
    } else if (response.status === 409) {
      yield put({
        type: DISPATCH_TOAST_FAILURE,
        message: response.data.message || GENERIC_ERROR_MESSAGE,
      });
      yield put({ type: action.payload.action + FAILURE });
    } else if (response.status === 500 || response.status === 400) {
      const message = response.data && response.data.message;
      yield put({
        type: DISPATCH_TOAST_FAILURE,
        message: message || GENERIC_ERROR_MESSAGE,
      });
      yield put({ type: action.payload.action + FAILURE });
    } else if (response.status === null) {
      const message = 'TIME OUT ERROR!';
      yield put({ type: DISPATCH_TOAST_FAILURE, message });
      yield put({ type: action.payload.action + FAILURE });
    } else {
      yield put({
        type: DISPATCH_TOAST_FAILURE,
        message: GENERIC_ERROR_MESSAGE,
      });
      yield put({ type: action.payload.action + FAILURE });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: DISPATCH_TOAST_FAILURE,
      message: GENERIC_ERROR_MESSAGE,
    });
    yield put({ type: action.payload.action + FAILURE, e });
    yield put({ type: MAKE_API_REQUEST_FAILURE });
  }
}

function* requestSaga() {
  yield takeEvery(MAKE_API_REQUEST, networkRequestSaga);
}

export default requestSaga;
