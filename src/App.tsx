import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'app/state/store';
import Entry from 'app/Entry';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Entry />
    </PersistGate>
  </Provider>
);

export default App;
