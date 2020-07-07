export const GET_USER_DETAILS = 'GET_USER_DETAILS';

export type userListState = {
  loading: boolean;
  userList: any[];
};

type GetUserListAction = {
  type: typeof GET_USER_DETAILS;
  payload: any;
};

export type UserListActionTypes = GetUserListAction;
