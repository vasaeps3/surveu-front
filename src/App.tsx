import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import { DefaultLayout, AuthLayout } from './containers';


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={DefaultLayout} />
        <Route path="/auth" component={AuthLayout} />
      </Router>
    );
  }
}

export default App;
