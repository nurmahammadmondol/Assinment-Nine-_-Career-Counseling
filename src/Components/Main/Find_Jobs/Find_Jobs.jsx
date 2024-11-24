import React from 'react';
import ApplyJobs from './ApplyJobs/ApplyJobs';
import Category from './Category/Category';
import Trusted from './Trusted/Trusted';
import { Helmet } from 'react-helmet';

const Find_Jobs = () => {
  return (
    <div className="my-16">
      <Helmet>
        <title>Success Hub || Find_Jobs</title>
      </Helmet>

      <div className="bg-orange-50 w-11/12  mx-auto">
        <ApplyJobs></ApplyJobs>
      </div>
      <div className="my-10 w-11/12  mx-auto">
        <Category></Category>
      </div>
      <div className="my-10 w-11/12  mx-auto">
        <Trusted></Trusted>
      </div>
    </div>
  );
};

export default Find_Jobs;
