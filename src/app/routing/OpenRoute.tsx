import React from 'react';
import { Route } from 'react-router-dom';

type Props = {
  path: string;
  component: React.ComponentType;
  headerSmallTopMargin?: boolean;
  exact?: boolean;
};

// Open routes are accessible for both signed in and signed out users
const OpenRoute = ({
  headerSmallTopMargin,
  path,
  exact,
  component: Component,
  ...rest
}: Props) => (
  <Route
    {...rest}
    exact={exact}
    component={(props: any) => <Component {...props} />}
  />
);

OpenRoute.defaultProps = {
  exact: true,
};

export default OpenRoute;
