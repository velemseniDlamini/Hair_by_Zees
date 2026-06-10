import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ activeLink, setActiveLink, cartCount, setShowCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ['Home', 'Shop', 'Gallery', 'Checkout'];

   return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="logo text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Hair by Zee
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`${activeLink === link ? 'text-pink-600 font-semibold' : 'text-gray-700'} hover:text-pink-500 transition-colors`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowCart(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => {
                  setActiveLink(link);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md ${activeLink === link ? 'bg-pink-50 text-pink-600 font-semibold' : 'text-gray-700'}`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


