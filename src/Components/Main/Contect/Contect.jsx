import React from 'react';
import ContactUsBGImage from '../../../assets/web Image/bgContactUS.jpg';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div
      className="min-h-screen relative -mt-12"
      style={{
        backgroundImage: `url(${ContactUsBGImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <Helmet>
          <title>Success Hub || Contact Us</title>
        </Helmet>
      </div>

      {/* Overlay div */}
      <div
        className="absolute inset-0 bg-gray-500 bg-opacity-50"
        style={{
          backdropFilter: 'blur(4px)', // ঝাপসা করার জন্য
          WebkitBackdropFilter: 'blur(4px)', // Safari সাপোর্টের জন্য
        }}
      ></div>

      {/* Content */}
      <div className="text-white  pt-20 relative">
        <h3 className="text-3xl md:text-5xl font-bold text-center ">
          Contact Us
        </h3>

        <div className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto my-20 md:flex justify-between gap-6">
          <div className="w-full md:w-1/2 flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <div>
                <i class="fa-solid fa-location-dot text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h5 className="text-xl font-bold ">Address</h5>
                <p className="text-sm text-gray-200">
                  Central Road Rangpur, Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <i class="fa-solid fa-phone text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h5 className="text-xl font-bold">Phone</h5>
                <p className="text-sm text-gray-200">+088017234556789</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <i class="fa-solid fa-envelope text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h5 className="text-xl font-bold">Email</h5>
                <p className="text-sm text-gray-200">successhub@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h4 className="text-2xl  font-semibold">Sent Message</h4>
            <form className="w-full">
              <div className="form-control my-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control my-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <textarea
                className="textarea textarea-bordered w-full  h-32 text-black"
                placeholder="Message"
              ></textarea>

              <div className="">
                <button className="btn w-full bg-cyan-100">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
