import React from 'react';

function IncomeField({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">Income</label>
      <input
        type="number"
        name="income"
        value={value}
        onChange={onChange}
        placeholder="Enter income (e.g., 1000.00)"
        min="0"               // Prevents negative numbers
        step="0.01"           // Limits input to two decimal places
        className="w-full p-2 mb-6 border border-gray-300 rounded"
      />
    </div>
  );
}

export default IncomeField;
