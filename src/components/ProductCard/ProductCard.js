import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="product-card">
      {product.discount && (
        <div className="product-discount">{product.discount}% Off</div>
      )}
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-weight">{product.weight}</p>
        <div className="product-prices">
          <span className="product-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="product-original-price">₹{product.originalPrice}</span>
          )}
        </div>
        {cartItem ? (
          <div className="cart-controls">
            <button onClick={() => removeFromCart(product)} className="cart-button">-</button>
            <span className="cart-quantity">{cartItem.quantity}</span>
            <button onClick={() => addToCart(product)} className="cart-button">+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
