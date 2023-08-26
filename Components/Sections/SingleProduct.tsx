"use client";
import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
const Min_Rating = 1;
const Max_Rating = 5;
type SingleProductType={
  id:string,
  title:string
  price:string,
  description:string,
  image:string

}
const SingleProduct = (onChange:any) => {
  const [singleProduct, setSingleProduct] = useState<SingleProductType | undefined>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/2")
      .then((response) => response.json())
      .then((data) => {
        setSingleProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const productId = singleProduct?.id;
  const productName = singleProduct?.title || "N/A";
  const productPrice = singleProduct?.price || "N/A";
  const productDescription = singleProduct?.description || "N/A";

  const productIamge = singleProduct?.
  image || "N/A";
  const [rating] = useState(
    Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)) + Min_Rating
  );

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onChange(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-200 text-gray-800">
      <div className="category hidden">
        <h1>Health&Beiutiy / selfr production / subcrioptionn</h1>
      </div>
      <div className="viewCounter hidden">
        <div className="icon">
          icon + 15 <h1>peopple see epxpt</h1>
          <div className="iconlike">223p 23 reverse</div>
        </div>
      </div>
      <hr></hr>

      <div className="productSection flex items-start space-x-10 p-10 ">
        <div className="image border-2 border-solid border-black ">
          <img src={productIamge} width={350} height={400} alt="" />
        </div>
        <div className="product_details ">
          <h1 className="text-blue-500 text-xl font-bold py-2">Product</h1>
          <p className="text-gray-500 text-xs"> Id:#{productId}</p>
          <h2 className="pb-1 text-2xl font-bold focus:outline-none">
            {productName}
          </h2>
          <h3 className="my-1 text-md  max-w-xl">{productDescription}</h3>
          <div className="flex items-center ">
            {Array(rating)
              .fill(Number)
              
              .map((_, i,) => (
              
                <IoMdStar fill="green" key={i} className="shadow-sm " />
              ))}
            <h3 className="text-[12px]  font-normal text-blue-800 p-1">
              2,745 rating
            </h3>
          </div>
          <div className="py-4 bg-white w-25 mt-auto w-[15%]  flex  item-center justify-around focus:outline-none focus:ring-2 border-solid border-2 border-gray-300 shadow-md rounded-xl items-center text-center">
            <button className="focus:outline-none" onClick={handleDecrement}>
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="focus:outline-none" onClick={handleIncrement}>
              +
            </button>
          </div>
          <p>colors</p>
          <p>Price: ${productPrice}</p>
        </div>
        <div className="payment-section bg-white border-gray-400 border-solid border-10 p-3 rounded-lg shadow-lg shadow-gray-600  ">
          <div className="delevr p-4 ">
            <h3 className="p-2 text-xl font-semibold max-w-xl text-blue-500 border-blue-500 border-4 rounded-md ">
              Free 2-day Delivery
            </h3>
            <p className="bg-gray-200 py-4 mt-2 shadow-md text-center ">this a not for showing the content inside component</p>
          </div>
          <div className="address border-gray-300 border-4 rounded-lg top-8 p-4">
            <h3 className="text-md font-semibold p-3">Free Pickup-Today</h3>
            <p className="p-3  text-base text-gray-800 font-medium">ub stock at San francisco,123040 Hesperian Biv </p>
          </div>
          <div className="pay-method p-4">
            <div className=" flex items-center justify-between text-base font-medium text-black ">
            <h1 className="font-medium text-md py-2">Total Amount</h1>
            <h1>
              <span className="font-semibold text-lg">79.99$</span>
            </h1>
            </div>
           
            <p>
              <img src="card.png"  height={30} alt="" />
            </p>
            
      
            
          </div>
          <button
        // onClick()
        className="mt-auto p-4  md:text-s rounded-xl text-xl bg-[#1133f7ea] shadow-sm focus:outline-none focus:ring-2  text-gray-300 font-semibold top-10 w-full left-3">
        Add Basket
      </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
