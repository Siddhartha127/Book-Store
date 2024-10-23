import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png"

const navigation = [
  {name:"Dashboard", href:"/dashboard"},
  {name:"Orders", href:"/orders"},
  {name:"Cart Page", href:"/cart "},
  {name:"Check Out", href:"/checkout"},
]

function Navbar() {
  const[isDropdownOpen, setIsisDropdownOpen] = useState(false)
  const currentUser = true;

  return (
    <header className="max-w-screen-2xl mx-auto px-10 py-6">
      <nav className="flex justify-between items-center">
        {/* left side*/}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>

          {/* search input*/}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className=" absolute inline-block left-3 inset-y-2" />
            <input
              type="search"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* right side*/}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
              <button onClick={()=> setIsisDropdownOpen(!isDropdownOpen)}>
                <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500': ''}`}/>
              </button>
               {/* show dropdowns*/}
               {isDropdownOpen && (
                 <div className="absolute right-0 mt-2 w-48 bg-white
                 shadow-lg rounded-md z-40">
                  <ul className="py-2">
                    {
                      navigation.map((item, index) => (
                        <li key={item.name} onClick={()=> setIsisDropdownOpen(false)}>
                          <Link to={item.href} className="block
                          px-4 py-2 text-sm hover:bg-gray-100" >
                            {item.name}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                 </div>
               )}
              </>
             ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 py-2 flex items-center
          rounded-sm"
          >
            <HiOutlineShoppingCart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
