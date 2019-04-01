import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './AuthLayout.scss';
import Login from '../../view/pages/Auth/Login';

const state = {
  todos: [
    {
      id: 1,
      name: 'Render static UI',
      isCompleted: true,
    },
    {
      id: 2,
      name: 'Create Initial state',
      isCompleted: true,
    },
    {
      id: 3,
      name: 'Render base on state',
      isCompleted: false,
    }
  ]
}

export default class AuthLayout extends Component {
  render() {
    const match = (this.props as any).match;

    return (
      <div className="authLayout">
        <div className="container">
          <div className="justify-content-center-c row">
            <div className="col-md-8">
              <div className="card">
                <Route exact path={`${match.path}/login`} render={() => (<Login todos={state.todos} />)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
