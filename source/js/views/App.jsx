import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Home from 'views/Home';
import Configurish from 'views/Configurish';
import People from 'views/People';
import Planets from 'views/Planets';
import Films from 'views/Films';
import NotFound from 'views/NotFound';

class App extends Component {
  constructor(properties, context) {
    super(properties, context);
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <div className="Page">

          <Switch>
            <Route exact path={routeCodes.CONFIGURISH} component={Configurish} />
            <Route exact path={routeCodes.HOME} component={Home} />
            <Route path={routeCodes.PEOPLE} component={People} />
            <Route path={routeCodes.PLANETS} component={Planets} />
            <Route path={routeCodes.FILMS} component={Films} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
