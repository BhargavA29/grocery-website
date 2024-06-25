import React from 'react';
import { useCart } from '../../context/CartContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import emptyCartImage from '../../assets/images/empty-cart.png'; // Ensure this path is correct
import './CartPage.css';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const totalPrice = getTotalPrice();
    console.log('Total Price:', totalPrice);

    const options = {
      key: 'rzp_test_KUuGtEkdL5tXDf', // Replace with your Razorpay key ID
      amount: totalPrice * 100, // Razorpay works with smallest currency unit
      currency: 'INR',
      name: 'QuickCart',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo', // Replace with your logo URL
      handler: function (response) {
        console.log('Payment Successful! Payment ID:', response.razorpay_payment_id);
        clearCart();
        navigate('/order-status', { state: { transactionId: response.razorpay_payment_id } });
      },
      prefill: {
        name: 'Your Name',
        email: 'youremail@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'QuickCart Corporate Office',
      },
      theme: {
        color: '#ff6f61',
      },
    };

    console.log('Razorpay Options:', options);

    const razorpay = new window.Razorpay(options);
    razorpay.on('payment.failed', function (response) {
      alert('Payment Failed! Please try again.');
    });
    razorpay.open();
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
                <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
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
