import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const Root_Layout = () => {
  return (
    <div className="">
      <Helmet>
        <title>Success Hub || Home</title>
      </Helmet>

      <div className="fixed z-50  top-0 w-full bg-cyan-50">
        <Navbar></Navbar>
      </div>

      <div className="min-h-screen mt-32">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root_Layout;
