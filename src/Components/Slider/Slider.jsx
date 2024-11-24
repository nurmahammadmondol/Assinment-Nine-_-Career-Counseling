import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className="bg-gray-50  my-20  flex  items-center">
      <button className="bg-cyan-50 w-[200px] py-4  text-xs font-bold">
        Success Hub - Career Counseling Platform :
      </button>
      <Marquee className="space-x-16 " pauseOnHover={true}>
        <p className=" first-letter:text-cyan-600 first-letter:font-bold">
          Our personalized counseling and expert resources will help you
          explore, plan, and achieve your career goals.
        </p>
        <p className="px-4 first-letter:text-cyan-600 first-letter:font-bold">
          Connect with mentors, gain valuable insights, and unlock opportunities
          tailored to your strengths and aspirations.
        </p>
        <p className="px-4 first-letter:text-cyan-600 first-letter:font-bold">
          Explore a world of career possibilities and take the first step toward
          building a successful future.
        </p>

        <p className=" first-letter:text-cyan-600 first-letter:font-bold">
          Confused about where to go next? We are here to provide personalized
          advice, expert strategies, and resources to help you succeed in your
          career..............
        </p>
      </Marquee>
    </div>
  );
};

export default Slider;
