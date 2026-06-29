import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">MyFood</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/menu" className="text-gray-600 hover:text-gray-800">Menu</Link>
          <Link to="/order" className="text-gray-600 hover:text-gray-800">Order</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;