import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Login from './pages/Login';
import Game from './pages/Game';

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/game" component={ Game } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}
