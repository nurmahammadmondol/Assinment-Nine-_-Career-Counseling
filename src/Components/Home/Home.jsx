import React from 'react';
import Banner from '../Header/Banner';
import Services from '../Main/Services/Services';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Success Hub || Home</title>
      </Helmet>
      <div className="h-full md:h-[500px] py-3 bg-cyan-50 -mt-14">
        <Banner></Banner>
      </div>
      <div className=" w-11/12 mx-auto ">
        <Slider></Slider>
      </div>
      <div className="my-11 w-full">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
