import React, { useEffect, useState } from "react";


import Banner from "./Banner";
import ProductFeed from "../ProductFeed";



export default  function Homebar() {
  // const products: any = await fetch("http://fakestoreapi.com/products").then(
  //   (res) => res.json()
  // );
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch("http://fakestoreapi.com/products")
    .then( (res) => res.json() )
    .then((data)=>{
      setProducts(data);

    });


    
  },[]);


  return (
    <div className="homepage bg-gray-100  ">
      <div className="main max-w-screen-2xl mx-auto mt-0 text-gray-700  ">
        <Banner />
        <ProductFeed products={products} />
      </div>
     
    </div>
  );
}
