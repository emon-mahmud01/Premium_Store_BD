import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Loyout/Root';
import Profile from './components/Profile';
import Home from './Pages/Home/Home';
import Descriptions from './components/Descriptions';
import Login from './Pages/LogIn/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/StreemingApps.json'),
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/descriptions/:id',
        element: <Descriptions />,
        loader: () => fetch('/StreemingApps.json'),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
