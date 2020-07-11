// blog types
export const GET_BLOG_DETAILS = 'GET_BLOG_DETAILS';

export type blogListState = {
  loading: boolean;
  blogList: any[];
};

type GetBlockListAction = {
  type: typeof GET_BLOG_DETAILS;
  payload: any;
};

export type BlockListActionTypes = GetBlockListAction;
