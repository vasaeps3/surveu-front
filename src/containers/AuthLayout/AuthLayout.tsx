import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './AuthLayout.scss';
import Login from '../../view/pages/Auth/Login';


export default class AuthLayout extends Component {
  render() {
    const match = (this.props as any).match;

    return (
      <div className="authLayout">
        <div className="container">
          <div className="justify-content-center-c row">
            <div className="col-md-8">
              <div className="card">
                <Route exact path={`${match.path}/login`} component={Login} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
