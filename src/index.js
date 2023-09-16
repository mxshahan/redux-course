import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import store from './store';
import { RootComponent } from './Main';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RootComponent />
      </Provider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
