import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import AuthProvider from './Providers/AuthProvider';
import Orders from './component/Orders';
import PrivateRoute from './Routes/PrivateRoute';
import Profile from './component/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/orders",
        element: <PrivateRoute> <Orders></Orders> </PrivateRoute>

      },
      {
        path:"/profile",
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>

      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
