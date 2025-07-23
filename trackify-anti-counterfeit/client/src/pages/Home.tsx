import React from 'react';
import './Home.css';

interface HomeProps {
  isLoggedIn: boolean;
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ isLoggedIn, setCurrentPage }) => {
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>🔐 Welcome to Trackify</h1>
          <p className="hero-subtitle">Advanced Anti-Counterfeit Product Detection & Tracking</p>
          
          {isLoggedIn ? (
            <div className="welcome-user">
              <h2>Welcome back, {user?.username}!</h2>
              <p>Protect your products from counterfeiting with our advanced tracking system.</p>
              
              <div className="action-buttons">
                <button 
                  className="primary-btn"
                  onClick={() => setCurrentPage('add-product')}
                >
                  Add New Product
                </button>
                <button 
                  className="secondary-btn"
                  onClick={() => setCurrentPage('products')}
                >
                  View Products
                </button>
              </div>
            </div>
          ) : (
            <div className="guest-content">
              <p className="hero-description">
                Secure your brand and protect consumers with our state-of-the-art 
                anti-counterfeit solution. Track, verify, and authenticate your products 
                throughout the supply chain.
              </p>
              
              <div className="action-buttons">
                <button 
                  className="primary-btn"
                  onClick={() => setCurrentPage('register')}
                >
                  Get Started
                </button>
                <button 
                  className="secondary-btn"
                  onClick={() => setCurrentPage('login')}
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="features-section">
        <h2>Why Choose Trackify?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure Authentication</h3>
            <p>Advanced cryptographic techniques to ensure product authenticity</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Easy Verification</h3>
            <p>Simple QR code scanning for instant product verification</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Tracking</h3>
            <p>Monitor your products throughout the entire supply chain</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Counterfeit Detection</h3>
            <p>AI-powered detection algorithms to identify fake products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
