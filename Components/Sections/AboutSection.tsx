import React from "react";
import { AiFillAccountBook } from "react-icons/ai"; 
import {MdOutlinePersonPin,MdCategory} from 'react-icons/md'

import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const AboutSection = () => {
  return (
    <div className="main text-black  md:flex justify-between ">
       <div className="left md:w-[50%]  md:justify-around mt-10 flex  items-center md:flex  relative left-[1rem] ">
        <div className="about  md:items-center left-14 space-x-3  ">
          <div className="icon p-1 ">
            <img src="Eshop.png " className="w-[15rem] bg- to-black" alt="" />
          </div>
          <div className="about-section ">
            <h1 className="font-extrabold text-[3rem] md:w-[50rem] p-1">
              <span className="font-bold ">About EShop</span>
            </h1>
            <h2 className="p-1 md:text-[1.2rem] text-gray-600 font-sans font-medium space-x-6 text-[1rem] md:w-[50rem] ">
              Launched in 2023,EShop is the leading platform <br /> for global
              wholesale trade.We serve milionw of buyers
              <br /> and suppliers around the world.
            </h2>
          </div>
          <div className="eShop-data flex items-center md:justify-between gap-4  py-10 md:w-[35rem]   ">
            <div className="section1">
              <div className="icons justify-between items-center ">
                <AiFillAccountBook className="data-style  text-gray-600"/>
              </div>
              <h2 className="pro text-[12px]  text-gray-400 font-semibold font-sans py-3"> Monthly unique visit</h2>
              <h2>
                <span className="text-[18px] font-bold text-black">30,254,699</span>
              </h2>
            </div>
            <div className="vr"></div>
            <div className="section2">
              <div className="icons justify-between items-center ">
                <MdOutlinePersonPin className="data-style  text-gray-600" />
              </div>
              <h2 className="pro text-[12px]  text-gray-400 font-semibold font-sans py-3">Active customers</h2>
              <h2>
                <span className="text-[18px] font-bold text-black">33 Million</span>
              </h2>
            </div>
            <div className="vr"></div>
            <div className="section3">
              <div className="icons justify-between items-center ">
                <MdCategory className="data-style  text-gray-600" />
              </div>
              <h2 className="pro text-[12px]  text-gray-400 font-semibold font-sans py-3">products for any need</h2>
              <h2>
                <span className="text-[18px] font-bold text-black">100k</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
     
      <div className="right md:w-[50%] right-0 flex items-center ">
        <img src="ani.png" alt="" />
      </div>
      
    
    </div>
  );
};

export default AboutSection;
