export const DISPATCH_TOAST_SUCESS = 'DISPATCH_TOAST_SUCESS';
export const DISPATCH_TOAST_FAILURE = 'DISPATCH_TOAST_FAILURE';
export const DISPATCH_TOAST_INFO = 'DISPATCH_TOAST_INFO';

type SuccessToastAction = {
  type: typeof DISPATCH_TOAST_SUCESS;
  payload: string;
};

type FailureToastAction = {
  type: typeof DISPATCH_TOAST_FAILURE;
  payload: string;
};

type InfoToastAction = {
  type: typeof DISPATCH_TOAST_INFO;
  payload: string;
};

export type ToastActionTypes =
  | SuccessToastAction
  | FailureToastAction
  | InfoToastAction;
