import React, { useState } from "react";
import "../index.css";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div
      className="max-w-[1640px] mx-auto flex 
    justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Foody<span className="font-bold">Zone</span>
        </h1>
        <div
          className="hidden lg:flex items-center bg-gray-200 
   rounded-full p-1 text-[14px] ">
          <p className="bg-orange-500 text-white rounded-full p-2">Delivery</p>
          <p className="p-2">pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      <button className=" rounded-3xl gap-3 bg-orange-500 border-white text-white hidden md:flex items-center py-2">
        <AiOutlineShoppingCart size={30} />
        Cart
      </button>
      {/* Mobile menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}{" "}
      {/* side menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-bold">
          Foody <span className="text-orange-500">Zone</span>
        </h2>
        <nav>
          <ul className="p-4 cursor-pointer">
            <li className="mb-2">Menu</li>
            <li className="mb-2">favourite</li>
            <li className="mb-2">Wallet</li>
            <li className="mb-2">Help</li>
            <li className="mb-2">Best Deals</li>
            <li className="mb-2">Invite friends</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
