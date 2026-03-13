
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import React from 'react';
import LoginForm from '../pages/auth/Login';
import Dashboard from '../pages/dashboard/dashboard';
import Reports from '../pages/reports/reports';
import Settings from '../pages/settings/settings';
import ForgotPassword from '../pages/auth/forgot-password';
import TimesheetCards from '../pages/project/project';
import NotFound from '../pages/NotFound/NotFound';
import Forbidden from '../pages/Forbidden/Forbidden';




function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginForm /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "*", element: <NotFound /> },
    { path: "/forbidden", element: <Forbidden /> },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/time-sheet", element: <TimesheetCards /> },
        { path: "/report", element: <Reports /> },
        { path: "/settings", element: <Settings /> },

      ]
    },

  ]);

  return <RouterProvider router={router} />;
}

export default Router;

