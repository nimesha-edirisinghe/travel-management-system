export const GET_BLOG_DETAILS = 'GET_BLOG_DETAILS';

export type blogListState = {
  blogList: any[];
};

type GetBlockListAction = {
  type: typeof GET_BLOG_DETAILS;
  payload: any;
};

export type BlockListActionTypes = GetBlockListAction;
