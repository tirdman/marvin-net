import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Home from 'views/Home';
import People from 'views/People';
import Planets from 'views/Planets';
import Films from 'views/Films';
import NotFound from 'views/NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MyAwesomeReactComponent from 'views/MyAwesomeReactComponent';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu />

        <MuiThemeProvider MyAwesomeReactComponent={MyAwesomeReactComponent}>
         <MyAwesomeReactComponent />
        </MuiThemeProvider>

        <div className='Page'>
          <Switch>
            <Route exact path={ routeCodes.HOME } component={ Home } />
            <Route path={ routeCodes.PEOPLE } component={ People } />
            <Route path={ routeCodes.PLANETS } component={ Planets } />
            <Route path={ routeCodes.FILMS } component={ Films } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
