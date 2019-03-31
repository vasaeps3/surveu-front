import { RouteProps } from 'react-router-dom';


import Login from '../../view/pages/Auth/Login';
import SignUp from '../../view/pages/Auth/SignUp/SignUp';

// const Login = React.lazy(() => import('../../view/pages/Auth/Login'));
// const SignUp = React.lazy(() => import('../../view/pages/Auth/SignUp'));


export const routes: RouteProps[] = [
  { path: '/login', exact: true, component: Login },
  { path: '/sign-up', component: SignUp },
];