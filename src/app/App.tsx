import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Weather from './pages/WeatherPage';

function App(): JSX.Element {

  return (
    <BrowserRouter>
          <Switch>
            <Route path="/">
              <Weather />
            </Route>
          </Switch>
    </BrowserRouter>
  );
}

export default App;
