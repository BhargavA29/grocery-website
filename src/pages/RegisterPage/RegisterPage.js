import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Mock register, replace with actual API call
      const response = await fakeApiCall(email, password);
      if (response.success) {
        // Mock register state
        navigate('/login');
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const fakeApiCall = (email, password) => {
    // Simulate an API call - replace this with actual API logic
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Registration failed' });
        }
      }, 1000);
    });
  };

  return (
    <div className="register-page">
      <Header />
      <main className="register-main">
        <div className="register-container">
          <h1 className="register-title">Register</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="register-button">Register</button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/account">Login here</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
