'use client'
import React, { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const EshopPlus: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, imageUrl: '/product2.jpg' },
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, imageUrl: '/product2.jpg' },
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, imageUrl: '/product2.jpg' },
    // Add more products
  ];

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 text-gray-700">
      <h1 className="text-3xl font-semibold mb-4">Eshop Plus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
            removeFromCart={() => removeFromCart(product.id)}
            isInCart={cart.some((item) => item.id === product.id)}
          />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EshopPlus;
