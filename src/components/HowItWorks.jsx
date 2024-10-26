// HowItWorks.js
import React from 'react';
import check from "../images/check.png";
import search from "../images/search.png";
import apply from "../images/apply.png";
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const cards = [
    {
      image: check,
      title: 'Enter Details',
      description: 'Start by entering your basic details!',
    },
    {
      image: search,
      title: 'Search',
      description: 'Our search engine will find the relevant schemes!',
    },
    {
      image: apply,
      title: 'Apply',
      description: 'Select and apply for the best suited scheme',
    },
  ];

  return (
    <div className="p-6">
      <h4 className="text-xl font-medium text-gray-400 text-center mb-6">How It Works</h4>
      <h1 className='text-3xl font-bold text-center'>Easy steps to apply for Government Schemes</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto flex flex-col justify-center items-center">
            <div className="w-[50%]">
              <img src={card.image} alt={card.title} className="w-full h-32 object-cover rounded-t-lg" />
            </div>
            <h2 className="text-xl font-bold mt-2">{card.title}</h2>
            <p className="text-gray-700 text-center">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="max-w-sm max-h-[400px] h-full mx-auto p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Welcome to Our Service!</h2>
        <p className="mb-4 text-gray-600">
          If you have any questions or need assistance, feel free to reach out to us.
        </p>
        
        <Link to="/chat" 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >        
            Chat
          </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
