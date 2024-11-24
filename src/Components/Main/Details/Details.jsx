import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { sixJsonData } from '../../Context/Context';
import successModalImage from '../../../assets/web Image/successImage.png';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Details = () => {
  const { UserEnroll, setUserEnroll } = useContext(sixJsonData);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const NumberID = parseInt(id);

  const { Data } = useContext(sixJsonData);

  const RightItemDetails = Data.find(Item => Item.id === NumberID);

  const {
    image,
    serviceName,
    category,
    price,
    counselor,
    rating,
    duration,
    description,
  } = RightItemDetails;

  const handleEnrollButton = () => {
    // console.log('Enroll Now');

    document.getElementById('my_modal_1').showModal();
    setUserEnroll(NumberID);
  };

  const handleModalClose = () => {
    toast.success('You are now enrolled in our session. !');
  };

  const handleClickEnrollBefore = () => {
    toast.warn('You have already attended one of our sessions.!');
  };

  return (
    <div className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto my-14 ">
      <Helmet>
        <title>Success Hub || Details</title>
      </Helmet>

      <h3 className="text-2xl font-bold my-8">
        Details :
        <span className="text-sm font-normal text-gray-300">
          ( {serviceName} )
        </span>
      </h3>
      <div className="card lg:card-side  bg-base-100 shadow-xl">
        <figure className=" w-full lg:w-1/2">
          <img className="border h-full" src={image} alt="Album" />
        </figure>

        <div className="card-body w-full lg:w-1/2">
          <h3 className="text-2xl font-bold">
            {serviceName}
            <span className="ml-2 text-sm text-gray-500 font-semibold">
              ({category})
            </span>
          </h3>

          <p className="text-gray-500">
            <i class="fa-regular fa-user"></i> Counselor : {counselor}
          </p>
          <p className="text-gray-500">
            <i class="fa-solid fa-money-check-dollar"></i> Price: {price}
          </p>
          <p className="text-gray-500 flex gap-3">
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
          <p className="text-gray-500">
            <i class="fa-regular fa-clock"></i> Duration : {duration}
          </p>
          <p className="text-gray-500">{description}</p>

          <div className="card-actions justify-end">
            <button
              onClick={handleGoBack}
              className="btn text-cyan-300 btn-outline"
            >
              Go Back
            </button>
            {UserEnroll ? (
              <button
                onClick={handleClickEnrollBefore}
                className="btn bg-cyan-100 text-gray-500"
              >
                Enroll for this Session
              </button>
            ) : (
              <button
                onClick={handleEnrollButton}
                className="btn bg-cyan-100 text-gray-500"
              >
                Enroll for this Session
              </button>
            )}
          </div>

          <div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box text-center">
                <div className="flex justify-center">
                  <img
                    className="w-16 h-16 text-center"
                    src={successModalImage}
                    alt=""
                  />
                </div>
                <h3 className="font-bold text-lg mt-4">{serviceName}!</h3>
                <p className="py-4">
                  Successfully enrolled for the
                  <span className="text-cyan-400 text-xl font-semibold ml-2">
                    Free session!
                  </span>
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      onClick={handleModalClose}
                      className="btn btn-outline btn-sm px-5 text-cyan-600"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
