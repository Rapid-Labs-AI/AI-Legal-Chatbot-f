import './App.css';
import Main from './components/main';
import Footer from './components/footer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the backend API endpoint URL
    const backendApiUrl = 'http://16.170.236.235:8000/api/';

    // Make a GET request to the backend
    axios.get(backendApiUrl)
      .then(response => {
        console.log(response);
        // setData(response.response);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      
      <Main />
      <Footer />
    </div>
  );
}

export default App;