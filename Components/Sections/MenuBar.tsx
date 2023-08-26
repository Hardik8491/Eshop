import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocalOffer } from "react-icons/md";
import { LuBellDot } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSolidMap } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

import Link from 'next/link'
const MenuBar = () => {
  return (
    <div className=" m-0 p-0  text-gray-500 font-semibold  ">
      <div className="Topbar  p-[1rem] ml-[2rem] mr-[2rem]  hidden sm:flex items-center justify-between">
        <div className="web-contect item-center">
          <ul className="web-ul flex items-center justify-between gap-[3rem] cursor-pointer flex-grow  ">
            <li>Contect us</li>
            <li>About Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="web-region item-center">
          <ul className="web-ul flex items-center justify-between gap-[3rem] cursor-pointer ">
            <li className="flex items-end justify-center gap-1 ">
              $50 <MdKeyboardArrowDown />
            </li>
            <li className="flex items-center justify-between gap-[0.5rem]">
              <div className="icon  ">
                <img
                  src="usa.png"
                  alt="Flag"
                  className="logo  rounded-full lg:w-[16px]h-[16px] xl:h-[18px] w-[18px]"
                />
              </div>
              <div className="contryname flex justify-center items-end gap-1">
                india
                <MdKeyboardArrowDown />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="MiddleBar  sm:flex items-center justify-between  mb-[10px] ml-[2rem] mr-[2rem] lg:gap-5 xl:gap-3">
        <div className="leftbar flex items-center justify-center gap-[2rem]">
          <div className="eshop-logo">
            <img src="Eshop.png" className="w-auto h-16 cursor-pointer " alt="" />
          </div>
          <div className="search bar">
            <div className="search-text flex items-center ">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#3e739e12] rounded-md  z-1 items-center  text-center  relative lg:p-[1rem] lg:text-base w-[25rem] xl:w-[27rem] p-[10px] "
              />
              <IoIosSearch  className="icon-search z-10 opacity-50 absolute lg:left-[37.5rem] xl:left-[44rem]  "></IoIosSearch>

              <button className="product-btn absolute  flex items-center justify-center h-[2.5rem] bg-white mx-3 w-[9rem] rounded-lg border-solid border  border-gray-200  ">
                <div className="text p-1 font-bold ">Products</div>
                <div className="icon-1">
                  <span className=" font-extrabold ">
                  <MdKeyboardArrowDown color="black" width={40} />
                  </span>
               
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="rightbar flex items-center  justify-between lg:text-sm gap-[2rem] xl:gap-[4rem] ">
          <div className="offer flex list-none justify-between lg:gap-[1rem] xl:gap-[2rem] text-gray-500 ">
            <li className="flex justify-between items-center gap-1 ">
              <div className="icon">
                <MdOutlineLocalOffer color="black"/>
              </div>
              <div className="name">Best Offers</div>
            </li>
            <li>Sell on Eshop</li>
          </div>
          <div className="profile flex items-center list-none  lg:gap-1 xl:gap-2">
            <li className=" rounded-full   bg-white border-solid border-[1px] lg:p-3.5  xl:p-4 ">
              <LuBellDot color="black" />
            </li>
            <li>
              <img
                src="profile.png"
                alt=""
                className=" rounded-full border-solid border-[1px] lg:h-11 w-11  xl:w-12 h-12 border-gray-600"
              />
            </li>
            <li className=" rounded-full    bg-white border-solid border-[1px] bg-[#3e739e12] lg:p-3.5  xl:p-4 ">
              <BsCart2 color="black" />
            </li>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="BottomBar hidden sm:flex items-center justify-between  ml-[2rem] mr-[2rem] font-medium text-black  p-[1rem]">
        <div className="menu flex items-center justify-center gap-[0.5rem]">
          <div className="icon">
            <AiOutlineMenu />
          </div>

          <div className="name">
            <Link href="Categories/Categories.tsx" >Categories </Link>
             </div>
        
        </div>
        <div className="bestProduct flex items-center justify-center gap-[4rem] list-none">
          <li>
    
            </li>
          <li>  <Link href="/plus"> EShop plus</Link></li>
          <li>
            <Link href="/service">Customer Service</Link>
          </li>
          <li>
            <Link href="/seller">Best Seller</Link>

          </li>
        </div>
        <div className="location flex items-center justify-center gap-[0.5rem]">
          <div className="icon">
            <BiSolidMap />
          </div>
          <div className="name">United State,Florida</div>
          <div className="arow">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      {/* <hr></hr> */}
  {/* Mobile Viewers <1080 */}
        <div className="MobileMenuv md:hidden flex items-center justify-between px-5 bg-[#6363611e] border-gray-300 shadow-md border-2 m-1 ">
          <div className="Logo">
            <img src="Eshop.png" className="w-[8rem]"  alt="" />
          </div>
          <div className="MIcon bg-white p-1 flex  items-center rounded-sm" >
            <AiOutlineMenu height={40} color="black" className="svg"  
            
              />
          </div>
        </div>
    </div>
  );
};

export default MenuBar;
