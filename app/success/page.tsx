'use client'
import { CheckCircle } from "heroicons-react";

import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
    const router=useRouter();
  return (
    <div className="bg-gray-100 h-screen text-gray-800">
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircle className="text-green-500" />
            <h1 className="text-3xl">
              Thank You,your order has been confirmed
            </h1>
          </div>
          <p className="pb-5">
            Thank you for shopping with us. we&apos;ll send a confirmation item hs,
            shipped, if you would like to check the status of orders please
            press the link below.
          </p>
          <button 
          onClick={() => router.push('/order')}
           className=" top-8 mt-auto p-2  md:text-s rounded-xl text-xl bg-[#1133f7ea] shadow-sm focus:outline-none focus:ring-2  text-gray-300 font-semibold ">
            Go to my order
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;
