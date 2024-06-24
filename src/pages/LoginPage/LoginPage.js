import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mock login, replace with actual API call
      const response = await fakeApiCall(email, password);
      if (response.success) {
        // Mock login state
        navigate('/');
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
        if (email === 'user@example.com' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid email or password' });
        }
      }, 1000);
    });
  };

  return (
    <div className="login-page">
      <Header />
      <main className="login-main">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
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
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
