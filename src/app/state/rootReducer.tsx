import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import themeReducer from './theme/themeReducer';
import blogReducer from './blog/blogListReducer';
import accountReducer from './account/accountReducer';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    theme: themeReducer,
    blog: blogReducer,
    account: accountReducer,
  });
