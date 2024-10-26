import React from 'react';

function GenderSelector({ value, onChange }) {
  return (
    <div className="mb-6 text-center">
      <label className="block mb-4 text-lg font-semibold text-gray-700">Choose your gender</label>
      <div className="flex space-x-8 justify-center">
        <label className="flex flex-col items-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={value === 'male'}
            onChange={onChange}
            className="hidden"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/177/622/original/man-avatar-isolated-png.png" // Replace with your boy image
            alt="Male"
            className="w-24 h-24 mb-2 rounded-full border-2 border-gray-300 transition-transform transform hover:scale-105"
          />
          <span className="text-gray-700">Male</span>
        </label>
        <label className="flex flex-col items-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={value === 'female'}
            onChange={onChange}
            className="hidden"
          />
          <img
            src="https://img.freepik.com/premium-vector/businesswoman-professional-work-career_18591-5274.jpg" // Replace with your girl image
            alt="Female"
            className="w-24 h-24 mb-2 rounded-full border-2 border-gray-300 transition-transform transform hover:scale-105"
          />
          <span className="text-gray-700">Female</span>
        </label>
      </div>
    </div>
  );
}

export default GenderSelector;
