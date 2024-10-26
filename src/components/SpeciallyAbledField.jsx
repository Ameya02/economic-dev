import React from 'react';

function SpeciallyAbledField({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Specially Abled</label>
      <div className="flex space-x-4 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="speciallyAbled"
            value="yes"
            checked={value === 'yes'}
            onChange={onChange}
            className="mr-2"
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="speciallyAbled"
            value="no"
            checked={value === 'no'}
            onChange={onChange}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>
  );
}

export default SpeciallyAbledField;
