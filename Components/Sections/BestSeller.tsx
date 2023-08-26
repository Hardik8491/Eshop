"use client";
import React, { useState, useEffect } from "react";
import Product from "../Product";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  // Add other properties as needed
}

function BestSellingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="hero bg-gray-100">
      <div className="best-products-page main max-w-screen-2xl mx-auto mt-0 text-gray-700 ">
        <h1>Best Selling Products</h1>
        {/* <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  mx-auto" >
          {products
            .slice(0, 4)

            .map((product) => (
              <Product
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.category.image}

                // id={product.id}
                // title={product.title}
                // price={product.price}
                // description={product.description}
                // category={product.category}
                // image={product.image}
              />
              // <Image src={product.image} alt={product.name} />
              // <p>{product.name}</p>
              // <p>ID: {product.id}</p>
              // </Product>
            ))}
          <img
            src="https://links.papareact.com/dyz"
            alt=""
            className="md:col-span-full "
          />
            <div className="md:col-span-2">
       {products
          .slice(4, 5)
        .map((product) => (
          <Product
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.category.image}
          />

        ))}
       </div>
      
        {products
          .slice(5,products.length)
        .map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.category.image}
           
          />
        ))
      }
        </div> */}
      </div>
    </div>
  );
}

export default BestSellingProducts;
