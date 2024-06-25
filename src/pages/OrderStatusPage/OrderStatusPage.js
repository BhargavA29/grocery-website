import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './OrderStatusPage.css';

const OrderStatusPage = () => {
  const location = useLocation();
  const { state } = location;
  const { transactionId } = state || {};
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!transactionId) {
      console.error('Transaction ID is missing!');
    } else {
      console.log('Transaction ID:', transactionId);
    }

    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 600);

    return () => clearInterval(timer);
  }, [transactionId]);

  return (
    <>
      <Header />
      <div className="order-status-page">
        <div className="status-container">
          <h1>Order Status</h1>
          <div className="progress-container">
            <CircularProgressbar
              value={progress}
              text={`Arriving in ${10 - Math.floor(progress / 10)}:${59 - (progress % 60)}`}
              styles={buildStyles({
                textColor: '#000',
                pathColor: '#4caf50',
                trailColor: '#d6d6d6',
                textSize: '14px', // Reduced the text size
              })}
              className="progress-bar"
            />
          </div>
          <div className="order-steps">
            <div className={`order-step ${progress >= 10 ? 'completed' : ''}`}>Order Confirmed</div>
            <div className={`order-step ${progress >= 50 ? 'completed' : ''}`}>In Transit</div>
            <div className={`order-step ${progress >= 100 ? 'completed' : ''}`}>Arrived</div>
          </div>
          <div className="order-status">
            {progress < 50 && <p>Your order is confirmed and will be in transit soon.</p>}
            {progress >= 50 && progress < 100 && <p>Your order is on the way and will arrive soon.</p>}
            {progress === 100 && <p>Your order has arrived. Enjoy your purchase!</p>}
          </div>
          {transactionId && <div className="transaction-id">Transaction ID: {transactionId}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderStatusPage;
