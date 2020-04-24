import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import themeReducer from './theme/themeReducer';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    theme: themeReducer,
  });
