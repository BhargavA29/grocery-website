// src/components/CheckoutForm/CheckoutForm.js
import React from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ totalAmount }) => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_KUuGtEkdL5tXDf', // Replace with your Razorpay key ID
      amount: totalAmount * 100, // Razorpay amount should be in paise
      currency: 'INR',
      name: 'QuickCart',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="checkout-form">
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default CheckoutForm;
