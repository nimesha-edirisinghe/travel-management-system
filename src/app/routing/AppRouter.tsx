import React from 'react';
import { History, createBrowserHistory } from 'history';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer, toast, Slide } from 'react-toastify';
import OpenRoute from './OpenRoute';
import 'react-toastify/dist/ReactToastify.css';

// Import Pages
import { HomePage, Playground } from '../pages';

export const browserHistory: History = createBrowserHistory();

const AppRouter = () => (
  <ConnectedRouter history={browserHistory}>
    <div style={{ backgroundColor: 'red' }}>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        hideProgressBar
        autoClose={3000}
        transition={Slide}
      />
    </div>

    <Switch>
      <OpenRoute path="/" component={HomePage} />
      <Route path="/playground" component={Playground} />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
