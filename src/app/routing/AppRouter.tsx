import React from 'react';
import { History, createBrowserHistory } from 'history';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer, toast, Slide } from 'react-toastify';
import OpenRoute from './OpenRoute';
import 'react-toastify/dist/ReactToastify.css';

// Import Pages
import {
  HomePage,
  Playground,
  AboutPage,
  BlogPage,
  ContactPage,
  GalleryPage,
} from '../pages';

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
      <OpenRoute path="/about" component={AboutPage} />
      <OpenRoute path="/blog" component={BlogPage} />
      <OpenRoute path="/contact" component={ContactPage} />
      <OpenRoute path="/gallery" component={GalleryPage} />
      <OpenRoute path="/playground" component={Playground} />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
