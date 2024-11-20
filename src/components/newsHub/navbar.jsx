import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiWifiOffLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const NewsHub = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-2 bg-purple-800 text-white">
      <div className="flex justify-between items-center">
        <Link to="/home">
          <div className="text-xl font-bold">Logo</div>
        </Link>

        <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu />
        </div>

        <div
          className={`lg:flex flex-col lg:flex-row items-center justify-between lg:gap-5 ${
            isMenuOpen ? "flex mt-3 gap-3" : "hidden lg:flex"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-5">
            <Link to="/home" className='hover:text-gray-300' >Home</Link>
            <Link to="/trending"  className='hover:text-gray-300'>Trending</Link>
            <Link to="/categories" className='hover:text-gray-300'>Categories</Link>
            <Link to="/favorites" className='hover:text-gray-300'>Favorites</Link>
          </div>

          <div className="flex items-center mt-3 lg:mt-0 gap-2">
            <input
              className="border-0 rounded-md p-1 w-full lg:w-48 text-black"
              type="text"
              placeholder="Search..."
            />
            <button className="p-1 bg-white text-purple-700 rounded-md">
              <IoIosSearch className="text-2xl hover:text-purple-900" />
            </button>
          </div>

          <div className="flex items-center gap-4 mt-3 lg:mt-0 text-xl">
            <RiWifiOffLine className="hover:text-gray-300" />
            <CgProfile className="text-3xl hover:text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHub;
