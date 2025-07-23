import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />;
      case 'register':
        return <Register setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return <Home isLoggedIn={isLoggedIn} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
