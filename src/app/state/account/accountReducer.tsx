import { userListState, GET_USER_DETAILS } from './types';
import { SUCCESS } from '../request/types';

const initialState: userListState = {
  userList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        userList: true,
      };

    default:
      return state;
  }
};
