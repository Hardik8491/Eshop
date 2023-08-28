"use client";
import moment from "moment";
import React from "react";


import { NumericFormat } from "react-number-format";
import Currency from "react-currency-format";

const OrderItem = ({
  id,
  amount,
  amountShipping,
  items,
  timestamp,
  images,
}: {
  id: string;
  amount: string;
  amountShipping: string;
  items: string;
  timestamp: number;
  images: string;
}) => {
  return (
    <div className="relative border rounded-md bg-white">
      <div className="flex item-center space-x-10 p-5 bg-gray-200 text-sm text-gray-600 ">
        <div className="">
          <p className="font-bold text-xs">ORDER PLACE</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            ${amount}
            -Next Day Delivery ${amountShipping}
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items?.length}{" "}
          Items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap ">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
        
          {/* {images.map((image:any) => (
            <img src={image} key={0} alt="" className="h-20 object-contain sm:h-32" />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
