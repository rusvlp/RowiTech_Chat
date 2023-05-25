import { StrictMode } from 'react';
import axios from 'axios';
import { enableMapSet } from 'immer';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { App } from './app';

import { _baseURL } from './default.evn';
import { GlobalStyle } from './GlobalStyle';
import { store, persistedStore } from './redux/store/store';
import { theme } from './utils/theme';


// axios.defaults.baseURL = _baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

enableMapSet();

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider {...{ theme }}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <Router>
            <App/>
            <GlobalStyle/>
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);