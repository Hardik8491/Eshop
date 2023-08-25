'use client'
import React, { useEffect, useState } from 'react'

const SidebarSection = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
  
        .then((data) => {
          setCategories(data);
          setSelectedCategory(data[0]);
        });
    }, []);
  
    const handleCategoryChange = (event: any) => {
      setSelectedCategory(event.target.value);
    };
  return (
    <div>
              <div className="text p-1 font-bold">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="bg-white text-gray-700  outline-none">
                  <option>Products</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
      
    </div>
  )
}

export default SidebarSection
