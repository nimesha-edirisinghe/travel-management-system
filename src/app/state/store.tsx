import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storageSession from 'redux-persist/lib/storage/session';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from 'app/state/rootSaga';
import combineReducers from 'app/state/rootReducer';
import { browserHistory } from 'app/routing/AppRouter';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['auth'],
};

const rootReducer = combineReducers(browserHistory);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware, routerMiddleware(browserHistory)];

const store = composeWithDevTools(applyMiddleware(...middlewares))(createStore)(
  persistedReducer
);

const persistor = persistStore(store, undefined, () => {});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;

export { store, persistor };
