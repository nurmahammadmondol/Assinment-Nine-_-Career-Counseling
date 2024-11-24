import React, { useContext } from 'react';
import { sixJsonData } from '../Context/Context';
import { Navigate } from 'react-router-dom';

const LoadingPage = ({ children }) => {
  const [User, Loading] = useContext(sixJsonData);

  if (Loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (User) {
    return { children };
  }

  return <Navigate to="/"></Navigate>;
};

export default LoadingPage;
