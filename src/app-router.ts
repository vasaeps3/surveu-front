import { RouteProps } from "react-router-dom";
import React from "react";

import { DefaultLayout, AuthLayout } from "./containers";


// Containers
// const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'))
// const AuthLayout = React.lazy(() => import('./containers/AuthLayout'))

export const routes: RouteProps[] = [
  { path: '/', exact: true, component: DefaultLayout },
  { path: '/auth', exact: true, component: AuthLayout }
]