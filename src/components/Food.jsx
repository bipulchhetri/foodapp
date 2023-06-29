import React, { useState } from "react";
import { Data } from "../Data/Data.js";
const Food = () => {
  const [foods, setfoods] = useState(Data);
  // filter types
  const filterType = (category) => {
    setfoods(
      Data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter by price
  const filterPrice = (price) => {
    setfoods(
      Data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="mx-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter ROw */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter types */}
        <div>
          <p className="font-bold text-gray-700">filter types</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setfoods(Data)}
              className="m-1  border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white  cursor-pointer">
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burgers
            </button>
           
            <button 
              onClick={() => filterType('pizza')}
            className=" m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white  cursor-pointer">
              Pizza
            </button>
            <button 
              onClick={() => filterType('salad')}
            className=" m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white  hover:text-white  cursor-pointer">
              salads
            </button>
            <button 
                onClick={() => filterType('chicken')}
            className=" m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white cursor-pointer">
              chicken
            </button>
          </div>
        </div>
        {/* filter prices */}
        <div>
          <p className="font-bold text-gray-700"> filter prices</p>
          <div>
            <button
             onClick={() => filterPrice("$")}
            className=" m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white  cursor-pointer">
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className=" m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white  cursor-pointer">
              $$
            </button>

            <button 
             onClick={() => filterPrice("$$$")}
            className=" m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white cursor-pointer">
              $$$
            </button>
          </div>
        </div>
      </div>

      {/* display food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold text-lg">{item.name}</p>
              <p className="font-bold text-lg">
                <span className="text-orange-500">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
