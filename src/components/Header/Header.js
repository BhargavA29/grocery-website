import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearch }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [deviceLocation, setDeviceLocation] = useState('Fetching location...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => {
              setDeviceLocation(data.city ? `${data.city}, ${data.countryName}` : 'Location not found');
            })
            .catch(() => {
              setDeviceLocation('Location not found');
            });
        },
        () => {
          setDeviceLocation('Location permission denied');
        }
      );
    } else {
      setDeviceLocation('Geolocation not supported');
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="logo-location">
        <div className="logo">
          <Link to="/">QuickCart</Link>
        </div>
        {(location.pathname === '/' || location.pathname === '/products') && (
          <div className="location-indicator">
            <img src="https://res.cloudinary.com/dplera1gb/image/upload/v1719339911/GPS-Location-PNG-High-Quality-Image_jxnkkv.png" alt="Location" className="location-icon" /> {/* Update with the correct path to the location icon */}
            <span>{deviceLocation}</span>
          </div>
        )}
      </div>
      {(location.pathname === '/' || location.pathname === '/products') && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button>Search</button>
        </div>
      )}
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
