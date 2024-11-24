import React from 'react';
import ErrorImage from '../../assets/web Image/error 404.webp';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Success Hub || Error page</title>
      </Helmet>
      <div className="h-full md:h-[500px] w-11/12 md:w-8/12 lg:w-6/12 mx-auto border rounded-lg p-5 bg-slate-50 flex flex-col items-center justify-center">
        <div className="w-11/12 md:w-9/12 h-[350px] mx-auto">
          <img className="w-full h-full" src={ErrorImage} alt="" />
        </div>
        <Link to="/">
          <button className="btn btn-outline mt-5">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
