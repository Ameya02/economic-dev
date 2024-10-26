// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. Empowering you to find answers and grow.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
