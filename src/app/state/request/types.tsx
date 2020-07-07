export const MAKE_API_REQUEST = 'MAKE_API_REQUEST';
export const MAKE_API_REQUEST_SUCCESS = 'MAKE_API_REQUEST_SUCCESS';
export const MAKE_API_REQUEST_FAILURE = 'MAKE_API_REQUEST_FAILURE';
export const SUCCESS = '_SUCCESS';
export const REQUEST = '_REQUEST';
export const FAILURE = '_FAILURE';

type MakeApiRequestAction = {
  type: typeof MAKE_API_REQUEST;
  payload: any;
};

type MakeApiRequestSuccessAction = {
  type: typeof MAKE_API_REQUEST_SUCCESS;
  payload: any;
};

type MakeApiRequestFailureAction = {
  type: typeof MAKE_API_REQUEST_FAILURE;
  payload: any;
};

export type ApiRequestActions =
  | MakeApiRequestAction
  | MakeApiRequestSuccessAction
  | MakeApiRequestFailureAction;
