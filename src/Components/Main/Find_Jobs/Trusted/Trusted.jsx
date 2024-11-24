import React from 'react';
import TrustedImage from '../../../../assets/web Image/pnggg image.png';

const Trusted = () => {
  return (
    <div className="md:flex gap-10 justify-between h-[300px] mt-44 mb-10">
      <div className="h-full w-2/5 mx-auto bg-cyan-50 relative rounded-lg">
        <img
          className="h-[450px] w-full absolute -bottom-5 "
          src={TrustedImage}
          alt=""
        />
      </div>

      <div className="h-full w-2/5 mx-auto flex flex-col justify-around">
        <span className="text-4xl md:text-5xl">
          <i class="fa-solid fa-business-time"></i>
        </span>
        <h3 className="text-2xl md:text-3xl font-bold">
          Trusted & Popular Job Portal
        </h3>
        <p className="text-gray-400">
          Find your dream job from thousands daily updated job vacancies. Find
          the best jobs online from UK job sites or apply directly on a business
          website. Search and find jobs today!
        </p>
        <div>
          <button className="btn bg-cyan-50">
            Post a Job <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
