import React from 'react';

function AgeField({ value, onChange }) {

  return (
    <div>
      <label className="block mb-2 font-semibold">Age</label>
      <input
        type="number"
        name="age"
        value={value}
        onChange={onChange}
        min="1"
        max="99"
        placeholder="Select age"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
    </div>
  );
}

export default AgeField;
