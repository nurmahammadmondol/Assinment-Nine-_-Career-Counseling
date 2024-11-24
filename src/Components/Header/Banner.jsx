import React from 'react';
import BannerImage from '../../assets/web Image/Career Counseling.jpg';

const Banner = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-8 md:mt-14 md:flex gap-10 lg:gap-20 justify-between">
      <div className="w-full md:w-1/2 space-y-5">
        <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold">
          Shape Your Career Path with Expert Guidance
        </h3>
        <p>
          Unlock Your Potential with Personalized Career Guidance. Chart Your
          Path to Success with Expert Advice. Discover Your Dream Career – Start
          Here
        </p>
        <button className="btn">Get Started Now</button>
      </div>
      <div className="w-full md:w-1/2 md:h-[370px] mt-5 md:mt-0">
        <img className="w-full h-full rounded-xl" src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
