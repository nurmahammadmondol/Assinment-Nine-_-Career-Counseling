import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { sixJsonData } from '../../Context/Context';

const SingleData = ({ item }) => {
  const { User } = useContext(sixJsonData);

  const { id, image, serviceName, category, price, counselor, rating } = item;

  return (
    <div className="border p-3 rounded-lg flex flex-col">
      <div className="h-[170px] rounded-lg">
        <img className="h-full w-full border rounded-lg" src={image} alt="" />
      </div>

      <div className="space-y-2 my-4 flex-grow">
        <h3 className="text-2xl font-bold">{serviceName}</h3>
        <h6 className="text-gray-500 font-semibold">{category}</h6>

        <p className="text-gray-500">
          <i class="fa-regular fa-user"></i> Counselor : {counselor}
        </p>
        <p className="text-gray-500">
          <i class="fa-solid fa-money-check-dollar"></i> Price: {price}
        </p>
        <p className="text-gray-500 flex items-center  gap-3">
          <i class="fa-regular fa-star"></i> Rating : {rating}
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </p>
      </div>
      {User ? (
        <Link to={`/Details/${id}`}>
          <button className="btn btn-sm btn-outline mt-auto w-full">
            Learn More
          </button>
        </Link>
      ) : (
        <Link to="/Login">
          <button className="btn btn-sm btn-outline mt-auto w-full">
            Learn More
          </button>
        </Link>
      )}
    </div>
  );
};

export default SingleData;
