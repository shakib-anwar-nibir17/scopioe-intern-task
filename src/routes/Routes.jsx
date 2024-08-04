import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/MainLayout';
import HomePage from '../module/Auth/Pages/HomePage';
import LoginPage from '../module/Auth/Pages/LoginPage';
import SigninPage from '../module/Auth/Pages/SigninPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Main />,
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
