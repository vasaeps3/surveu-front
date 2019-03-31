import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss';
import { AuthLayout, DefaultLayout } from './containers';

// Containers
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DefaultLayout} />
          <Route path="/auth" component={AuthLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
