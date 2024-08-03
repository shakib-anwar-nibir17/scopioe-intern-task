import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/Auth/AuthLayout';
import LoginPage from '../module/Auth/Pages/LoginPage';
import SigninPage from '../module/Auth/Pages/SigninPage';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'signin',
        element: <SigninPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
