"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/Eshop.png";
import contry from "../public/usa.png";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocalOffer } from "react-icons/md";
import { LuBellDot } from "react-icons/lu";
import { BsCart2, BsPersonFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSolidMap } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { selectItems } from "@/basketSlice";
import { useTranslation } from "next-i18next";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())

      .then((data) => {
        setCategories(data);
        setSelectedCategory(data[0]);
      });
  }, []);

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  const handleItemChange = (event: any) => {
    setSelectedItem(event.target.value);
  };

  const router = useRouter();
  const items = useSelector(selectItems);

  const { data: session } = useSession();

  return (
    <header className=" header font-semibold text-gray-700   bg-white w-full shadow-xl  border-b-0 border-gray-200 focus:outline-none rounded-md   ">
      <div className=" TopBar hidden md:flex items-center justify-between py-2 px-10 cursor-pointer ">
        <div className="left ">
          <ul className=" flex items-center space-x-6 gap-4 font-semibold text-sm  text-gray-700  ">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="right flex items-center space-x-4  gap-4  font-semibold text-sm  text-gray-700">
          <li className="flex items-center justify-center gap-1 ">
            $50 <MdKeyboardArrowDown />
          </li>
          <li className="flex items-center justify-between gap-[0.5rem]">
            <div className="icon  ">
              <Image
                src={contry}
                alt="Flag"
                objectFit="contain"
                className="logo  rounded-full w-[16px] h-[16px] cursor-pointer"
              />
            </div>
            <div className="contryname flex justify-center items-end gap-1">
              English
              <MdKeyboardArrowDown />
            </div>
          </li>
        </div>
      </div>

      <div className=" MidddleBar  md:flex flex items-center justify-between  flex-grow  px-10 cursor-pointer] mb-2 gap-5 ">
        <div className="flex gap-4 items-center">
          <div className=" mt-1 flex items-center flex-grow sm:flex-grow-0 bg-white ">
            <Image
              onClick={() => router.push("/")}
              src={logo}
              alt="Picture of the author"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer items-center flex "
            />
          </div>
          <div className="relative  md:flex">
            <input
              type="text"
              placeholder="Search.."
              className=" bg-slate-200  border-1  border-gray-300  h-10 sm:pr-0 sm:pl-0  md:pl-20 md:pr-24 md:text-end md:h-14 lg:pr-40 lg:pl-0  xl:pl-40 text-center rounded-lg   text-sm focus:outline-none cursor-text "
            />
            <div className="searchIcon absolute right-0 top-0 mt-3 md:mt-5 mr-4 opacity-50">
              <IoIosSearch />
            </div>
            <button className="product-btn absolute  flex items-center justify-center mt-2 bg-white  mx-2 p-1  w-[8rem] rounded-lg border-solid border  border-gray-200 ">
              <div className="text p-1 font-bold ">Products</div>
              <div className="icon-1">
                <span className=" font-extrabold ">
                  <MdKeyboardArrowDown color="black" width={40} />
                </span>
              </div>
            </button>
            <button className="bg-white hidden md:flex md:px-6 lg:px-6 items-center absolute border-solid border rounded-lg md:p-[5px] lg:p-[5px] px-5 bottom-1.5 left-3 outline-blue-900   border-gray-300 ">
              <div className="text p-1 font-bold">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="bg-white text-gray-700  outline-none">
                  <option>Products</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </button>
          </div>
        </div>

        <div className="rightbar flex items-center  justify-between  gap-[2rem] xl:gap-[4rem] ">
          <div className="offer hidden md:flex list-none text-md justify-between lg:gap-[1rem] xl:gap-[2rem] text-gray-500 ">
            <li className="flex justify-between items-center gap-1 ">
              <div className="icon">
                <MdOutlineLocalOffer color="black" />
              </div>
              <div className="name">Best Offers</div>
            </li>
            <li>Sell on Eshop</li>
          </div>
          <div className="user  p-2  object-cover rounded-sm ">
            <button
              onClick={() => {
                !session?.user?.email ? signIn() : signOut();
              }}
              className="text-center px-5 text-lg font-serif p-1  border bg-white border-gray-300 shadow-gray-200 shadow-md rounded-md hover:underline  focus:outline-none ">
              {session ? (
                <div className="flex items-center space-x-3">
                  {<BsPersonFill />}
                  <span>{`Hello, ${session.user?.name}`}</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div className="profile flex items-center list-none gap-2 lg:gap-1 xl:gap-2 ">
            <li className=" rounded-full  relative   bg-slate-100  bg-[#3e739e12]  p-4 cursor-pointer">
              <LuBellDot color="black" className="Profile" />
            </li>

            <li
              onClick={() => {
                !session?.user?.email ? signIn() : signOut();
              }}>
              <img
                src={session ? `${session.user?.image}` : "Sign In"}
                width={50}
                height={50}
                alt=""
                className=" rounded-full border-solid border-[1px]  cursor-pointer  border-gray-600"
              />
            </li>
            <li
              onClick={() => router.push("/cart")}
              className=" rounded-full  relative   bg-slate-100  bg-[#3e739e12]  p-4 cursor-pointer">
              <span className="absolute top-2 right-2   h-4 w-4 text-[10px] bg-gray-300 text-center border border-solid border-slate-300  rounded-full text-black font-semibold ">
                {items.length}
              </span>
              <BsCart2 color="black" className="Profile" />
            </li>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-solid  border-gray-300 w-full shadow-2xl shadow-black " />
      {/* bottom navbar */}
      <div className="BottomBar hidden md:flex items-center justify-between  font-sm text-black  py-3 shadow-sm bg-white cursor-pointer focus:outline-none  px-10 ">
        <div className="menu flex items-center justify-center gap-[0.5rem]">
          <button className="flex justify-between gap-1 items-center">
          
         
              <div className="text p-1 font-bold flex justify-between gap-1 items-center">
              <AiOutlineMenu />
                <select
                
                  value={selectedItem}
                  onChange={handleItemChange}
                  className="bg-white text-gray-900  outline-none">
                  <option>All</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            

          </button>
          {/* <div className="icon">
            <AiOutlineMenu />
          </div>

          <div className="name ">
            <Link href="/sidebar">All</Link>
           
          </div> */}
        </div>
        <div className="bestProduct flex items-center justify-center gap-[4rem] list-none">
          <li>
            <Link href="/product">Best product</Link>
          </li>
          <li>
            {" "}
            <Link href="/plus"> EShop plus</Link>
          </li>
          <li>
            <Link href="/service">Customer Service</Link>
          </li>
          <li>
            <Link href="/sellar">Best Seller</Link>
          </li>
        </div>
        <div className="location flex items-center justify-center gap-[0.5rem] cursor-pointer ">
          <div className="icon">
            <BiSolidMap />
          </div>
          <div className="name">United State,Florida</div>
          <div className="arow">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </header>
  );
}
