import React, { useState } from 'react';

function Details() {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    residence: '',
    category: '',
    speciallyAbled: '',
    isStudent: '',
    income: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6">User Information</h2>
        
        {/* Gender Field */}
        <label className="block mb-2 font-semibold">Gender</label>
        <div className="flex space-x-4 mb-4">
          <label className="flex items-center">
            <input 
              type="radio" 
              name="gender" 
              value="male" 
              onChange={handleChange} 
              className="mr-2" 
            /> Male
          </label>
          <label className="flex items-center">
            <input 
              type="radio" 
              name="gender" 
              value="female" 
              onChange={handleChange} 
              className="mr-2" 
            /> Female
          </label>
        </div>
        
        {/* Age Field */}
        <label className="block mb-2 font-semibold">Age</label>
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
        />
        
        {/* Residence Field */}
        <label className="block mb-2 font-semibold">Residence</label>
        <select 
          name="residence" 
          value={formData.residence} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="">Select...</option>
          <option value="urban">Urban</option>
          <option value="rural">Rural</option>
        </select>
        
        {/* Category Field */}
        <label className="block mb-2 font-semibold">Category</label>
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="">Select...</option>
          <option value="general">General</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
          <option value="obc">OBC</option>
        </select>
        
        {/* Specially Abled Field */}
        <label className="block mb-2 font-semibold">Specially Abled</label>
        <div className="flex space-x-4 mb-4">
          <label className="flex items-center">
            <input 
              type="radio" 
              name="speciallyAbled" 
              value="yes" 
              onChange={handleChange} 
              className="mr-2" 
            /> Yes
          </label>
          <label className="flex items-center">
            <input 
              type="radio" 
              name="speciallyAbled" 
              value="no" 
              onChange={handleChange} 
              className="mr-2" 
            /> No
          </label>
        </div>
        
        {/* Student Field */}
        <label className="block mb-2 font-semibold">Student</label>
        <div className="flex space-x-4 mb-4">
          <label className="flex items-center">
            <input 
              type="radio" 
              name="isStudent" 
              value="yes" 
              onChange={handleChange} 
              className="mr-2" 
            /> Yes
          </label>
          <label className="flex items-center">
            <input 
              type="radio" 
              name="isStudent" 
              value="no" 
              onChange={handleChange} 
              className="mr-2" 
            /> No
          </label>
        </div>
        
        {/* Income Field */}
        <label className="block mb-2 font-semibold">Income</label>
        <input 
          type="text" 
          name="income" 
          value={formData.income} 
          onChange={handleChange} 
          className="w-full p-2 mb-6 border border-gray-300 rounded" 
        />
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Details;
