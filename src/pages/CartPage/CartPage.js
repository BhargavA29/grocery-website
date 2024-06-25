import React from 'react';
import { useCart } from '../../context/CartContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import emptyCartImage from '../../assets/images/empty-cart.png'; // Ensure this path is correct
import './CartPage.css';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Header />
      <div className="cart-page">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-container">
          {cart.length === 0 ? (
            <div className="empty-cart-container">
              <img src={emptyCartImage} alt="Empty Cart" className="empty-cart-image" />
              <p className="empty-cart">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h2 className="cart-item-name">{item.name}</h2>
                      <p className="cart-item-weight">{item.weight}</p>
                      <div className="cart-item-prices">
                        <span className="cart-item-price">₹{item.price}</span>
                        {item.originalPrice && (
                          <span className="cart-item-original-price">₹{item.originalPrice}</span>
                        )}
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={() => removeFromCart(item.id)} className="cart-button">-</button>
                        <span className="cart-quantity">{item.quantity}</span>
                        <button onClick={() => addToCart(item)} className="cart-button">+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h2 className="summary-title">Order Summary</h2>
                <p className="summary-total">
                  Total Price: <span className="total-price">₹{getTotalPrice()}</span>
                </p>
                <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
                <button className="checkout-button">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
