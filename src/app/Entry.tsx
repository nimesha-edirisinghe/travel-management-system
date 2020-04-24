import React from 'react';
import { connect } from 'react-redux';
import AppRouter from 'app/routing/AppRouter';

type Props = {
  themeName: string;
};

const Entry = ({ themeName }: Props) => {
  return (
    <div className={themeName}>
      <AppRouter />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  themeName: state.theme.themeName,
});

export default connect(mapStateToProps)(Entry);
