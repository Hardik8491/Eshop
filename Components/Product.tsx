
import { useState } from "react";
import Image from "next/image";
const Min_Rating = 1;
const Max_Rating = 5;
import { useDispatch } from "react-redux";
import { addToBasket } from "../basketSlice";


import { IoIosStarOutline, IoMdStar } from "react-icons/io";


const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  // images,
}: {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  // images: string;
  hashPlus?: string;
}) => {
  const [rating] = useState(
    Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)) + Min_Rating
  );
  const [hashPlus] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,

      title,
      price,
      description,
      rating,
      category,
      image,
      hashPlus,
    };

    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex  flex-col  m-5 p-10  bg-white z-30  ">
      <p className="absolute top-3 right-2 text-xl italic text-gray-400">
        {category}
      </p>

      <div className="flex items-center bg-gray-100 justify-center pb-2">
        <Image
          src={image}
          alt="Image "
          objectFit="contain"
          height={200}
          width={200}
        />
      </div>
      <div
        className="">
        <Image  src={image} alt="" />
      </div>

      <h4>{title}</h4>
      <div className="flex items-center ">
        {Array(rating)
          .fill(Number)
          .map((_, i) => (
            <IoMdStar fill="green" key={i} className="shadow-sm " />
          ))}
        <h3 className="text-[12px]  font-normal text-blue-800 p-1">
          2,745 rating
        </h3>
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <p className="text-gray-700 font-medium ">
         ${price}
         
        
        </p>
      </div>

      {/* <p className="text-sm p-2 font-normal text-gray-700">Free Delivery</p> */}

      {hashPlus && (
        <div className="flex items-center space-x-2 -mt-5 p-2">
          <Image
            src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Delivery_Choices/091222_DEX_PrimeAmazonDay_LP_Steps_1_Desktop_600x220.jpg"
            alt=""
            className="w-12"
          />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button
        onClick={addItemToBasket}
        className="mt-auto p-2  md:text-s rounded-xl text-xl bg-[#1133f7ea] shadow-sm focus:outline-none focus:ring-2  text-gray-300 font-semibold">
        Add Basket
      </button>
    </div>
  );
};

export default Product;


 

  
  
