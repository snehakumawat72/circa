import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in (e.g., via session or token)
    // You might need to implement your own logic here
    // For demonstration purpose, I'll just set it to true
    setIsLoggedIn(true);
    
    // Fetch user data when component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make a GET request to fetch user data
      const response = await axios.get('YOUR_API_USER_DATA_ENDPOINT');
      const userData = response.data;
      setUsername(userData.username);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For demonstration purpose, I'll just set isLoggedIn to false
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <header>
      <div>
        <h1>Welcome to Your App</h1>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => { /* Implement your login logic here */ }}>Login</button>
        )}
      </div>
    </header>
  );
}

export default Header;
