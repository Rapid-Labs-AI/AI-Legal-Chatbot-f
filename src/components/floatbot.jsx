import React, { useState } from 'react';

export default function Floatbot() {
  const [isOpen, setIsOpen] = useState(true); // Chat card is initially opened.

  return (
    <div className="fixed top-80 right-0 m-8 sm:hidden md:block">
      {isOpen ? (
        // Chat card is open
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-8 border-indigo-900 flex items-center space-x-4 max-w-sm">
          <div className="rounded-full p-4 text-white bot-img-float">
            <img src={require('../boticon.png')} alt="Chat Bot Icon" />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-medium text-gray-900">Try our Chat bot now!</h3>
            <p className="text-gray-500">How can we help you? We are here for you!</p>
            <div className="flex items-end mt-3">
              <input type="text" placeholder="Your message" className="border rounded-lg p-2 text-gray-700 w-full"/>
              <button type="button" className="send-btn text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-4 ml-2 focus:outline-none">
                <img src={require('../send.png')} alt="Send" />
              </button>
            </div>
          </div>
            <button 
             onClick={() => setIsOpen(false)} 
             className="text-gray-800 hover:text-gray-900 rounded-full text-lg py-1.5 px-3 right-4 shadow-lg ml-auto border-0 close-icon-floating-bot">
             <span className='font-semibold'>x</span>
            </button>
        </div>
      ) : (
        // Chat card is closed, show the logo
        <button onClick={() => setIsOpen(true)} className="text-indigo-900 rounded-full p-4 shadow-lg">
          <img src={require('../boticon.png')} alt="Open Chat" className="rounded-full" />
        </button>
      )}
    </div>
  );
}

