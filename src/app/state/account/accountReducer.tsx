import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { userListState, GET_USER_DETAILS } from './types';
import { SUCCESS, REQUEST, FAILURE } from '../request/types';

const initialState: userListState = {
  loading: false,
  userList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAILS + REQUEST:
      return {
        ...state,
        loading: true,
        userList: [],
      };
    case GET_USER_DETAILS + FAILURE:
      return {
        ...state,
        loading: false,
        userList: [],
      };
    case GET_USER_DETAILS + SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };

    default:
      return state;
  }
};
