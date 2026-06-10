import React, { useState } from "react";
import { Filter, X } from "lucide-react";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSection from "../components/FilterSection";
import ActiveFilters from "../components/ActiveFilters";

const ShopPage = ({ onAddToCart }) => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = PRODUCTS.filter(product => {
    return (selectedType === 'All' || product.category === selectedType) &&
           (selectedColor === 'All' || product.color === selectedColor);
  });

  const clearAllFilters = () => {
    setSelectedType('All');
    setSelectedColor('All');
  };

  return (
    <div className="pt-20 px-4 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Shop Wigs</h1>
            <p className="text-gray-600">Find your perfect style from our collection</p>
          </div>
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="md:hidden flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Filter className="w-5 h-5" /> Filters
          </button>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar - More Space */}
          <div className="hidden md:block w-80 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-24 z-10">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Filters</h2>
                <p className="text-sm text-gray-600">Refine your search</p>
              </div>
              <FilterSection
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
              
              {(selectedType !== 'All' || selectedColor !== 'All') && (
                <button
                  onClick={clearAllFilters}
                  className="w-full mt-8 px-4 py-3 border-2 border-pink-500 text-pink-600 rounded-xl font-semibold hover:bg-pink-50 transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filters - Full Screen */}
          {showMobileFilters && (
            <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
              <div className="min-h-screen">
                <div className="sticky top-0 bg-white border-b shadow-sm z-10 px-6 py-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
                      <p className="text-sm text-gray-600">Refine your search</p>
                    </div>
                    <button 
                      onClick={() => setShowMobileFilters(false)} 
                      className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 pb-32">
                  <FilterSection
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                </div>

                <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-6 shadow-2xl">
                  <div className="flex gap-3">
                    {(selectedType !== 'All' || selectedColor !== 'All') && (
                      <button
                        onClick={clearAllFilters}
                        className="flex-1 px-4 py-3 border-2 border-pink-500 text-pink-600 rounded-xl font-semibold hover:bg-pink-50 transition-all"
                      >
                        Clear All
                      </button>
                    )}
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      View {filteredProducts.length} Products
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid - More Space */}
          <div className="flex-1 min-w-0">
            <ActiveFilters
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-xl mb-6">No products match your current filters</p>
                <button 
                  onClick={clearAllFilters}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  Clear All Filters <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;


