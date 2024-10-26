import React from 'react';

function CategoryField({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Category</label>
      <select
        name="category"
        value={value}
        onChange={onChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="">Select...</option>
        <option value="general">General</option>
        <option value="sc">SC</option>
        <option value="st">ST</option>
        <option value="obc">OBC</option>
      </select>
    </div>
  );
}

export default CategoryField;
