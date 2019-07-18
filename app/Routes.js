import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import CurriculumStorePage from './containers/CurriculumStorePage.js';
import CreationStorePage from './containers/CreationStorePage.js';

export default () => (
  <App>
    <Switch>
      <Route path={routes.CREATION} component={CreationStorePage} />
      <Route path={routes.CURRICULUM} component={CurriculumStorePage} />
      <Route path={routes.COUNTER} component={CounterPage} />
			<Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
