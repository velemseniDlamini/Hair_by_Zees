
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { BENEFITS } from "../data/benefits";
import ProductCard from "../components/ProductCard";
import Hero  from "../assets/images/HERO SECTION.png"
const HomePage = ({ onAddToCart, setActiveLink }) => {
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen pt-20">
        <img
          src={Hero}
          alt="Beautiful women wearing natural wigs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} max-w-3xl`}> 
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Your Natural Beauty, Enhanced
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
              Discover our curated collection of premium natural wigs. Handcrafted for elegance, designed for confidence.
            </p>
            <button
              onClick={() => setActiveLink('Shop')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              Shop Wigs <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.featured).map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Wigs in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.slice(0, 4).map((product, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover hover:scale-110 transition-transform duration-500 responsive-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
