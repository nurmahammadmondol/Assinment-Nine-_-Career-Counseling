import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Root_Layout from '../Root_Layout/Root_Layout';
import Login from '../Root_Layout/Login/Login';
import Registration from '../Root_Layout/Registration/Registration';
import Home from '../Home/Home';
import Find_Jobs from '../Main/Find_Jobs/Find_Jobs';
import About from '../Main/About/About';
import Contact from '../Main/Contect/Contect';
import Services from '../Main/Services/Services';
import Details from '../Main/Details/Details';
import MyClass from '../Main/MyClasses/MyClass';
import ErrorPage from '../Error/ErrorPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root_Layout></Root_Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Services',
        element: <Services></Services>,
      },
      {
        path: '/Details/:id',
        element: <Details></Details>,
      },
      {
        path: '/MyClasses',
        element: <MyClass></MyClass>,
      },

      {
        path: '/Contact',
        element: <Contact></Contact>,
      },
      {
        path: '/About',
        element: <About></About>,
      },
      {
        path: '/FindJobs',
        element: <Find_Jobs></Find_Jobs>,
      },
    ],
  },

  {
    path: '/Login',
    element: <Login></Login>,
  },
  {
    path: '/Registration',
    element: <Registration></Registration>,
  },
]);

export default Router;
