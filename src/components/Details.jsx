import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenderField from './GenderField';
import AgeField from './AgeField';
import ResidenceField from './ResidenceField';
import CategoryField from './CategoryField';
// import SpeciallyAbledField from './SpeciallyAbledField';
import StudentField from './StudentField';
// import IncomeField from './IncomeField';

function Details() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    residence: '',
    category: '',
    isStudent: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (isStepValid()) {
      setStep((prevStep) => Math.min(prevStep + 1, formSteps.length - 1));
    }
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleSubmit = () => {
    if (isFormComplete()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/chat'); // Navigate to the new route with data
    }
  };

  // Check if the current step's field is filled
  const isStepValid = () => {
    const fieldNames = ['gender', 'age', 'residence', 'category', 'speciallyAbled', 'isStudent', 'income'];
    const currentFieldName = fieldNames[step];
    return formData[currentFieldName] !== '';
  };

  // Check if all fields are filled for the submit button
  const isFormComplete = () => {
    return Object.values(formData).every((value) => value !== '');
  };

  const formSteps = [
    <GenderField value={formData.gender} onChange={handleChange} />,
    <AgeField value={formData.age} onChange={handleChange} />,
    <ResidenceField value={formData.residence} onChange={handleChange} />,
    <CategoryField value={formData.category} onChange={handleChange} />,
    // <SpeciallyAbledField value={formData.speciallyAbled} onChange={handleChange} />,
    <StudentField value={formData.isStudent} onChange={handleChange} />,
    // <IncomeField value={formData.income} onChange={handleChange} />,
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">User Information</h2>
        
        {/* Render the current step */}
        {formSteps[step]}
        
        <div className="flex justify-between mt-6">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
            >
              Back
            </button>
          )}
          
          {step < formSteps.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`p-2 rounded ${isStepValid() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isFormComplete()}
              className={`p-2 rounded ${isFormComplete() ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
