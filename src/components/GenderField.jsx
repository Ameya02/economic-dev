import React from 'react';

function GenderField({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Gender</label>
      <div className="flex space-x-4 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={value === 'male'}
            onChange={onChange}
            className="mr-2"
          />
          Male
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={value === 'female'}
            onChange={onChange}
            className="mr-2"
          />
          Female
        </label>
      </div>
    </div>
  );
}

export default GenderField; // Make sure you export it as default
