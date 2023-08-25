'use client'
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    // You can implement your own cart logic here
    setIsAddedToCart(true);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(3)}</p>
      <button
        onClick={handleAddToCart}
        className={`mt-4 w-full px-4 py-2 ${
          isAddedToCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        } text-white rounded-md`}
        disabled={isAddedToCart}
      >
        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
