'use client'

import React, { useState, useEffect } from 'react';
import LoginForm from './components/Login/page'; 
import Dashboard from './components/Dashboard/page'; 

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus) {
      setIsLoggedIn(true);
    }
    setIsLoading(false); 
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  
  if (isLoading) {
    return <div>Loading...</div>;  
  }

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />  
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />  
      )}
    </div>
  );
}
