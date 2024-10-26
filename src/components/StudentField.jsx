import React from 'react';

function StudentField({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Student</label>
      <div className="flex space-x-4 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="isStudent"
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
            name="isStudent"
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

export default StudentField;
