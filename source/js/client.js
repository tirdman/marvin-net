import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from 'config/store';
import App from 'views/App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


// Load CSS
import 'index.css';

const store = configureStore().store;

// When used with server dehydrated state "ReactDOM.hydrate" should be called
const renderMethod = process.env.HYDRATE ? ReactDOM.hydrate : ReactDOM.render;

const muiTheme = getMuiTheme(darkBaseTheme);

renderMethod(
  <AppContainer>
    <Provider store={ store }>
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
        <App userAgent={navigator.userAgent} />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
