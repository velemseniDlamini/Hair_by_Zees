import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = ({ setActiveLink }) => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="logo text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">Hair by Zee</h3>
            <p className="text-gray-600">Your trusted source for premium natural wigs and hairpieces.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Shop', 'Gallery', 'Checkout'].map(link => (
                <button 
                  key={link}
                  onClick={() => setActiveLink(link)}
                  className="block text-gray-600 hover:text-pink-600 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Shipping Info</a>
              <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Returns</a>
              <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-pink-600" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5 text-pink-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
          <p>&copy; 2026 <span className="logo">Hair by Zee</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


