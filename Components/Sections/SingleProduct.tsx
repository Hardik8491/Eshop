"use client";
import { Share } from "heroicons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Product from "../Product";

import { IoMdStar } from "react-icons/io";
import ProductFeed from "../ProductFeed";
const Min_Rating = 1;
const Max_Rating = 5;
type SingleProductType = {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
};

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: "img1.jpeg", alt: "Image 1" },
  { src: "img2.jpg", alt: "Image 2" },
  { src: "img3.jpeg", alt: "Image 3" },
  { src: "img1.jpeg", alt: "Image 4" },
];
const SingleProduct = (onChange: any, products:any ) => {
  const [singleProduct, setSingleProduct] = useState<
    SingleProductType | undefined
  >();

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

  const productIamge = singleProduct?.image || "";
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
    <div className="h-screen bg-slate-50 ">
      <div className="Category py-4 px-60 text-xs font-thin">
        <p>
          Electronics›Mobiles & Accessories›Smartphones & Basic
          Mobiles›Smartphones
        </p>
      </div>
      <div className="product-data flex justify-center gap-[2rem] ">
        <div className="img_Category">
          <div className="image-column w-20">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className=" border border-gray-600 rounded-xl p-1 mb-4 "
              />
            ))}
          </div>
        </div>
        <div className="main_image">
          <Share />
          <img src="mv.jpg" className="w-50 h-100 object-cover " />
        </div>
        <div className="product_details">
          {/* <p>#{productId}</p> */}
            <p>#cb97c3fe-bb9e-4404-a654-f560f300976</p>

          <h1 className="text-xl font-semibold max-w-sm p-2  ">
            realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display
            | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger
          </h1>
          <Link href="www.google.com" className="text-[#007185]">
            Visit the realme Store
          </Link>

          <h2 className="text-md font-normal max-w-md p-2 ">
            Phone Setup Service at the time of delivery. Please select
            convenient setup slot at checkout if available. Details Brand Realme
            Model Name Realme narzo 60 5G Network Service Provider Unlocked for
            All Carriers Operating System Android 13.0 Cellular Technology
          </h2>
          <p> 4.0 4.0 out of 5 stars 1,242 ratings | 201 answered questions</p>
          <p>Eshop's Choice for "realme"</p>
          <hr />

          <h2 className="font-medium text-3xl flex gap-2 items-center py-2">
            <p className="text-red-500">-10%</p>₹17,999
          </h2>
          <p className="text-xs font-serif line-through">M.R.P.: ₹19,999</p>
          <h6 className="p-2">
            Inclusive of all taxes <br />
            EMI starts at ₹873.No Cost EMI available EMI options <br /> Coupon:
            Apply ₹1000 coupon Terms | Shop items
          </h6>

          <hr></hr>
          <span className="p-3">
            <img src="nv.png" alt="" />
          </span>

          {/*           
          <h4>{productPrice}</h4> */}
        </div>
      </div>
      {/* {products.toString()
        .slice(5, products.length)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
          }: {
            id: string;
            title: string;
            price: number;
            description: string;
            category: string;
            image: string;
          }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))} */}

    </div>
  );
};

export default SingleProduct;
