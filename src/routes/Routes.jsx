import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/Auth/AuthLayout';
import Main from '../layouts/MainLayout';
import LoginPage from '../module/Auth/Pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]);
