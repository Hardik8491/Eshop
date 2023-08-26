
import moment from "moment";
import React from "react";


const OrderItem = (
  {
    id,amount,amountShipping,items,timestamp,images
  }:{ id:string,amount:string,amountShipping:string,items:string,timestamp:number,images:string}
) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex item-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600 ">
        <div className="">
            <p>ORDER PLACE</p>
            <p>{moment.unix(timestamp).format("DD MMm YYYY")}</p>

        </div>
        <div >
            <p className="text-xs font-bold">TOTAL</p>
            <p>
                   {/* <CurrencyFormat
            value={amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          /> -Next Day Delivery{" "}
 */}           {amount}
  
       

        {/* <CurrencyFormat
            value={amountShipping}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}/>
          */}
            </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
