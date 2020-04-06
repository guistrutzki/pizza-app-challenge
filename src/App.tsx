import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Root from './routes';
import { store } from './state';

console.disableYellowBox = true;

const App: FC = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
export default App;
