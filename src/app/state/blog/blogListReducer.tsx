import { blogListState, GET_BLOG_DETAILS } from './types';
import { SUCCESS } from '../request/types';

const initialState: blogListState = {
  loading: false,
  blogList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_DETAILS:
      return {
        ...state,
        blogList: true,
      };

    default:
      return state;
  }
};
