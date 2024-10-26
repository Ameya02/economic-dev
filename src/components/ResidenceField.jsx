import React from 'react';

function ResidenceField({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Residence</label>
      <select
        name="residence"
        value={value}
        onChange={onChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="">Select...</option>
        <option value="urban">Urban</option>
        <option value="rural">Rural</option>
      </select>
    </div>
  );
}

export default ResidenceField;
