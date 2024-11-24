import React from 'react';

const Category = () => {
  return (
    <div className="my-28">
      <h3 className="text-center text-4xl font-bold">
        Choose Your Desire Category
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        <div className="px-3 py-4 border rounded-lg flex gap-4 shadow-lg">
          <div className="text-4xl">
            <i class="fa-solid fa-headset"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Technical Support</h3>
            <span className="text-gray-400">35 Jobs Available</span>
          </div>
        </div>
        <div className="px-3 py-4 border rounded-lg flex gap-4 shadow-lg">
          <div className="text-4xl">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Business Development</h3>
            <span className="text-gray-400">107 Jobs Available</span>
          </div>
        </div>
        <div className="px-3 py-4 border rounded-lg flex gap-4 shadow-lg">
          <div className="text-4xl">
            <i class="fa-solid fa-house"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Real Estate Business</h3>
            <span className="text-gray-400">38 Jobs Available</span>
          </div>
        </div>
        <div className="px-3 py-4 border rounded-lg flex gap-4 shadow-lg">
          <div className="text-4xl">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Share Market Analysis</h3>
            <span className="text-gray-400">50 Jobs Available</span>
          </div>
        </div>
        <div className="px-3 py-4 border rounded-lg flex gap-4 shadow-lg">
          <div className="text-4xl">
            <i class="fa-solid fa-sack-dollar"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Finance & Banking Services</h3>
            <span className="text-gray-400">80 Jobs Available</span>
          </div>
        </div>
        <div className="px-3 py-4 border rounded-lg flex gap-4 shadow-lg">
          <div className="text-4xl">
            <i class="fa-solid fa-truck"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Home Delivery Services</h3>
            <span className="text-gray-400">75 Jobs Available</span>
          </div>
        </div>
        <div className="px-3 py-4 border rounded-lg flex gap-4 shadow-lg">
          <div className="text-4xl">
            <i class="fa-solid fa-utensils"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Restaurant Service</h3>
            <span className="text-gray-400">147 Jobs Available</span>
          </div>
        </div>
        <div className="px-3 py-4 border rounded-lg flex gap-4 shadow-lg">
          <div className="text-4xl">
            <i class="fa-solid fa-fire"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Defence & Fire Sercice</h3>
            <span className="text-gray-400">120 Jobs Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
