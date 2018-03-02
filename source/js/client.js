import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from 'config/store';
import App from 'views/App';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { green, red, cyan} from 'material-ui/colors';

//import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


// Load CSS
import 'index.css';

const store = configureStore().store;

// When used with server dehydrated state "ReactDOM.hydrate" should be called
const renderMethod = process.env.HYDRATE ? ReactDOM.hydrate : ReactDOM.render;

// const muiTheme = getMuiTheme(lightBaseTheme);

class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return <App {...this.props} />
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: cyan,
    accent: red,
    type: 'light',
  },
});

renderMethod(
  <AppContainer>
    <Provider store={ store }>
      <BrowserRouter>
        <MuiThemeProvider theme={theme} >
          <App userAgent={navigator.userAgent} />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);




// renderMethod(
//   <AppContainer>
//     <Provider store={ store }>
//       <BrowserRouter>
//        <MuiThemeProvider muiTheme={muiTheme}>
//         <App userAgent={navigator.userAgent} />
//         </MuiThemeProvider>
//       </BrowserRouter>
//     </Provider>
//   </AppContainer>,
//   document.getElementById('root')
// );


// render(
//   <MuiThemeProvider theme={theme}>
//     <Main />
//   </MuiThemeProvider>,
//   document.querySelector('#root'),
// );