import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import themeReducer from './theme/themeReducer';
import blogReducer from './blog/blogListReducer';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    theme: themeReducer,
    blog: blogReducer,
  });
