import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product, onAddToCart, featured = false }) => {
 const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${isHovered ? 'transform -translate-y-2 shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 responsive-img"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        {featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm md:text-base text-gray-600 mb-3">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-bold text-pink-600">R {product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


