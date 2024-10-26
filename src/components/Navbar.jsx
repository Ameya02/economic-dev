import React, { useState } from 'react';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'; // Import Link for navigation
import banner from "../images/1.jpg";
import logo from "../images/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex items-center">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src={logo}
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Button to navigate to another route */}
          <Link to="/details" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
            Find Schemes..
          </Link>
        </nav>
      </header>

      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
      </div>
    </>
  );
};

export default Navbar;
