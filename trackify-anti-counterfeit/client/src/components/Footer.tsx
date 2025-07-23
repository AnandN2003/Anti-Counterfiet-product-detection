import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>🔐 Trackify</h3>
              <p>Advanced Anti-Counterfeit Protection</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Product Authentication</li>
              <li>Supply Chain Tracking</li>
              <li>Counterfeit Detection</li>
              <li>QR Code Verification</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>How It Works</li>
              <li>Security</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>API Documentation</li>
              <li>Developer Resources</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">📧 Email</a>
              <a href="#" className="social-link">🐦 Twitter</a>
              <a href="#" className="social-link">📱 LinkedIn</a>
              <a href="#" className="social-link">📘 GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2025 Trackify Anti-Counterfeit. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
