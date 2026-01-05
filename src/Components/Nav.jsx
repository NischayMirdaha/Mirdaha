import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-green-600">Mirdaha</span> Technology
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 hover:text-green-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Get in Touch
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-900 font-medium">Home</a>
              <a href="#about" className="text-gray-700 font-medium">About</a>
              <a href="#services" className="text-gray-700 font-medium">Services</a>
              <a href="#projects" className="text-gray-700 font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 font-medium">Contact</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg w-fit font-medium">
                Get in Touch
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;