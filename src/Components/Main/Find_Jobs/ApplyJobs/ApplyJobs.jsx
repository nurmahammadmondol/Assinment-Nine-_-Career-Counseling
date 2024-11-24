import React from 'react';
import { ImProfile } from 'react-icons/im';
import { MdDriveFolderUpload } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';

const ApplyJobs = () => {
  return (
    <div className=" p-5 md:h-[200px] space-y-10 md:space-y-0 md:flex gap-4 justify-around items-center font-bold text-lg">
      <div className="text-center">
        <div className="flex flex-col items-center gap-3 text-4xl ">
          <ImProfile></ImProfile>
        </div>
        <h3>Registration Your Account</h3>
      </div>
      <div className="text-center">
        <div className="flex flex-col items-center gap-3 text-4xl ">
          <MdDriveFolderUpload></MdDriveFolderUpload>
        </div>
        <h3>Upload Your Resume</h3>
      </div>
      <div className="text-center ">
        <div className="flex flex-col items-center gap-3 text-4xl  ">
          <FaLocationArrow></FaLocationArrow>
        </div>
        <h3>Apply for Dream Job</h3>
      </div>
    </div>
  );
};

export default ApplyJobs;
