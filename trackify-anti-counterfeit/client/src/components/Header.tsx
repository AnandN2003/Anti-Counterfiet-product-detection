import React from 'react';
import './Header.css';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout, currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🔐 Trackify</h1>
          <span className="tagline">Anti-Counterfeit Protection</span>
        </div>
        
        <nav className="nav">
          <button 
            className={currentPage === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={currentPage === 'products' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('products')}
          >
            Products
          </button>
          {isLoggedIn && (
            <button 
              className={currentPage === 'add-product' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setCurrentPage('add-product')}
            >
              Add Product
            </button>
          )}
        </nav>

        <div className="auth-section">
          {isLoggedIn ? (
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <div>
              <button 
                className={currentPage === 'login' ? 'auth-btn active' : 'auth-btn'}
                onClick={() => setCurrentPage('login')}
              >
                Login
              </button>
              <button 
                className={currentPage === 'register' ? 'auth-btn active' : 'auth-btn'}
                onClick={() => setCurrentPage('register')}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
