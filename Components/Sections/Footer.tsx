import React from "react";
import {
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="Footer w-full h-32 text-gray-400 bg-gray-950 bottom">
      <div className="bg-[#051d2ef3] flex items-center justify-between p-[2rem]  ">
        <div className="logo flex flex-col items-start ">
          <img src="Eshop.png" alt="" className="w-32" />
          <p className="max-w-sm py-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            dolore vero suscipit ad iusto mollitia in nihil error molestiae
            facere?
          </p>
          <div className="icons flex space-x-6  ">
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
            <BsYoutube />
            <BsTelegram />
          </div>
        </div>
        <div className="Eshop">
          <h1 className="font-extrabold text-lg ">Eshop</h1>
          <p>Newsletter</p>
          <p>Sell omn Eshop</p>
          <p>Career</p>
          <p>Contact us</p>
          <p>About us</p>
        </div>
        <div className="Service">
          <h1 className="font-extrabold text-lg">Service</h1>
          <p>FAQ</p>
          <p>Ask question</p>
          <p>Find support</p>
          <p>Terms of use</p>
          <p>Report a bug</p>
        </div>
        <div className="newsLetter">
          <h1>
            <span className="font-semibold text-base">Join to out newsletter</span>
          </h1>
      <div className="input flex items-center space-x-2" >  
        <input type="text" className="p-1 rounded-md bg-gray-300" />
          <button className="bg-[#1133f7ea] px-8 py-1 rounded-md text-lg ">Join</button></div>
          <h1 className="mt-5">
            <span className="font-semibold">Download the app: </span>
            <div className="icons flex gap-1 p-1 ">
              <img src="play.png"   className="w-24" alt=""  />
              <img src="apple.png"  className="w-24" alt="" />
            </div>
          </h1>
        </div>
      </div>
  <div className="px-[2rem] py-[1rem] bg-[#03131f] flex items-center justify-between text-sm font-sans">
    <div className="@right  leading-normal tracking-wide ">
      &#169;Eshop Inc.All rights reserved.
    </div>
    <div className="condition indent-10 leading-normal tracking-wide ">
      <p> Terms & Conditions  |  Privacy Policy  |  Sitemap  |  Disclaimer </p>
    </div>
  </div>
    </div>
  );
};

export default Footer;
