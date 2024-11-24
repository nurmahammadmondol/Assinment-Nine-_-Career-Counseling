import React, { useContext } from 'react';
import { sixJsonData } from '../../Context/Context';
import SingleData from './SingleData';

const Services = () => {
  const { Data } = useContext(sixJsonData);

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-14">
      <h3 className="text-2xl md:text-4xl font-bold">Our Services</h3>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {Data.map(service => (
          <SingleData key={service.id} item={service}></SingleData>
        ))}
      </div>
    </div>
  );
};

export default Services;
