import { Product } from '@/types/products';

import React, { useState, useEffect } from 'react';

interface FilterProps {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SearchAndFilter: React.FC<FilterProps> = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  // Handle search input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle category filter
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTitle(event.target.value);
  };

  // Filter products based on search query and selected filters
  const filterProducts = () => {
    let filtered = [...products];
    
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTitle) {
      filtered = filtered.filter((product) => product.category === selectedTitle);
    }

    if (minPrice || maxPrice) {
      filtered = filtered.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setFilteredProducts(filtered);
  };

  // Call filter whenever the filters change
  useEffect(() => {
    filterProducts();
  }, [searchQuery, selectedTitle, minPrice, maxPrice]);

  return (
    <div className="search-and-filter">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-[100%] p-2 border border-[#B88E2F] shadow-lg rounded-md mb-4"
        />
      </div>

      <div className="filters">
        {/* Category filter */}
        <select
          value={selectedTitle}
          onChange={handleCategoryChange}
          className="w-[100%] p-2 border border-[#B88E2F] shadow-lg rounded-md mb-4"
        >
          <option value="">Select Category</option>
          <option value="furniture">Furniture</option>
          <option value="Bed">Bed</option>
          <option value="Sofa">Sofa</option>
          <option value="Vase">Vase</option>
          {/* Add more categories as needed */}
        </select>

        {/* Price filter */}
        <div className="price-filter">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Min Price"
            className="w-[48%] p-2 border border-[#B88E2F] shadow-lg rounded-md mr-2"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Max Price"
            className="w-[48%] p-2 border border-[#B88E2F] shadow-lg rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
