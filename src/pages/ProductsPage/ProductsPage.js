import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductsPage.css';

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('');

  const sampleProducts = [
    { id: 1, name: 'Fortune Suji', weight: '500 g', price: 35, originalPrice: 39, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Parle-G', weight: '250 g', price: 25, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Cat Food', weight: '1 kg', price: 192, originalPrice: 199, discount: 3, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Whisper Ultra-XL', weight: '15 piece', price: 160, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Tata Agni Tea', weight: '250 g', price: 55, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 1', weight: '500 g', price: 50, originalPrice: 60, discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 2', weight: '1 kg', price: 100, originalPrice: 120, discount: 20, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 3', weight: '750 g', price: 75, originalPrice: 90, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 4', weight: '200 g', price: 20, originalPrice: 25, discount: 5, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Product 5', weight: '300 g', price: 30, originalPrice: 35, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Apple', weight: '1 kg', price: 150, originalPrice: 200, discount: 25, image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Banana', weight: '1 kg', price: 50, originalPrice: 60, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Orange', weight: '1 kg', price: 120, originalPrice: 140, discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Grapes', weight: '500 g', price: 90, originalPrice: 100, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Mango', weight: '1 kg', price: 200, originalPrice: 250, discount: 20, image: 'https://via.placeholder.com/150' },
    // More products to make it 50
    { id: 16, name: 'Product 6', weight: '500 g', price: 80, originalPrice: 90, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Product 7', weight: '1 kg', price: 110, originalPrice: 130, discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Product 8', weight: '250 g', price: 60, originalPrice: 70, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Product 9', weight: '2 kg', price: 220, originalPrice: 250, discount: 12, image: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Product 10', weight: '1.5 kg', price: 180, originalPrice: 200, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 21, name: 'Product 11', weight: '300 g', price: 40, originalPrice: 45, discount: 5, image: 'https://via.placeholder.com/150' },
    { id: 22, name: 'Product 12', weight: '600 g', price: 70, originalPrice: 80, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 23, name: 'Product 13', weight: '900 g', price: 90, originalPrice: 100, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 24, name: 'Product 14', weight: '400 g', price: 50, originalPrice: 60, discount: 8, image: 'https://via.placeholder.com/150' },
    { id: 25, name: 'Product 15', weight: '700 g', price: 130, originalPrice: 150, discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 26, name: 'Product 16', weight: '500 g', price: 50, originalPrice: 60, discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 27, name: 'Product 17', weight: '1 kg', price: 100, originalPrice: 120, discount: 20, image: 'https://via.placeholder.com/150' },
    { id: 28, name: 'Product 18', weight: '750 g', price: 75, originalPrice: 90, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 29, name: 'Product 19', weight: '200 g', price: 20, originalPrice: 25, discount: 5, image: 'https://via.placeholder.com/150' },
    { id: 30, name: 'Product 20', weight: '300 g', price: 30, originalPrice: 35, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 31, name: 'Product 21', weight: '500 g', price: 35, originalPrice: 39, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 32, name: 'Product 22', weight: '250 g', price: 25, image: 'https://via.placeholder.com/150' },
    { id: 33, name: 'Product 23', weight: '1 kg', price: 192, originalPrice: 199, discount: 3, image: 'https://via.placeholder.com/150' },
    { id: 34, name: 'Product 24', weight: '15 piece', price: 160, image: 'https://via.placeholder.com/150' },
    { id: 35, name: 'Product 25', weight: '250 g', price: 55, image: 'https://via.placeholder.com/150' },
    { id: 36, name: 'Product 26', weight: '500 g', price: 50, originalPrice: 60, discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 37, name: 'Product 27', weight: '1 kg', price: 100, originalPrice: 120, discount: 20, image: 'https://via.placeholder.com/150' },
    { id: 38, name: 'Product 28', weight: '750 g', price: 75, originalPrice: 90, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 39, name: 'Product 29', weight: '200 g', price: 20, originalPrice: 25, discount: 5, image: 'https://via.placeholder.com/150' },
    { id: 40, name: 'Product 30', weight: '300 g', price: 30, originalPrice: 35, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 41, name: 'Product 31', weight: '1 kg', price: 150, originalPrice: 200, discount: 25, image: 'https://via.placeholder.com/150' },
    { id: 42, name: 'Product 32', weight: '1 kg', price: 50, originalPrice: 60, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 43, name: 'Product 33', weight: '1 kg', price: 120, originalPrice: 140, discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 44, name: 'Product 34', weight: '500 g', price: 90, originalPrice: 100, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 45, name: 'Product 35', weight: '1 kg', price: 200, originalPrice: 250, discount: 20, image: 'https://via.placeholder.com/150' },
    { id: 46, name: 'Product 36', weight: '500 g', price: 80, originalPrice: 90, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 47, name: 'Product 37', weight: '1 kg', price: 110, originalPrice: 130, discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 48, name: 'Product 38', weight: '250 g', price: 60, originalPrice: 70, discount: 10, image: 'https://via.placeholder.com/150' },
    { id: 49, name: 'Product 39', weight: '2 kg', price: 220, originalPrice: 250, discount: 12, image: 'https://via.placeholder.com/150' },
    { id: 50, name: 'Product 40', weight: '1.5 kg', price: 180, originalPrice: 200, discount: 10, image: 'https://via.placeholder.com/150' },
  ];

  const sortProducts = (products, option) => {
    switch (option) {
      case 'price-high-low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'price-low-high':
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = sortProducts(sampleProducts, sortOption);

  return (
    <>
      <Header />
      <div className="products-page">
        <h1 className="products-title">All Products</h1>
        <div className="filter-container">
          <select className="filter-dropdown" onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
        <div className="products-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
