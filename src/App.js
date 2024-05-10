import './App.css';
import Main from './components/main';
import Footer from './components/footer';
import Chatbot from './pages/chatbot';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {path: '/chat', element: <><Chatbot/></>},
    {path: '', element: <><Main /><Footer /></>},
    {path: '/api', element: <><Main /><Footer /></>},

  ])
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Define the backend API endpoint URL
  //   const backendApiUrl = 'http://127.0.0.1:8000/api/';

  //   // Make a GET request to the backend
  //   axios.get(backendApiUrl)
  //     .then(response => {
  //       console.log(response);
  //       // setData(response.response);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []); // Empty dependency array means this effect runs once when the component mounts
  

  return (
    <>
      

      <div>
        <RouterProvider router={router} />

        
      </div>
      
    </>
  );
}

export default App;