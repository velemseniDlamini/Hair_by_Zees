import React from "react";

const FilterSection = ({
  selectedType,
  setSelectedType,
  selectedColor,
  setSelectedColor
}) => {
 const types = ['All', 'Waterwave', 'Frontal Weave', 'Headband', 'Short Curly', 'Curly', 'Silky Straight', 'Bob Headband'];
  const categories = ['All', 'Waterwave', 'Frontal Weave', 'Headband', 'Short Curly', 'Curly', 'Silky Straight', 'Bob Headband'];
  const FilterButton = ({ active, onClick, label }) => (
    <button
      onClick={onClick}
      className={`block w-full text-left px-5 py-3 rounded-xl transition-all duration-200 ${
        active 
          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md transform scale-105' 
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></span>
          Wig Type
        </h3>
        <div className="space-y-3">
          {types.map(type => (
            <FilterButton
              key={type}
              active={selectedType === type}
              onClick={() => setSelectedType(type)}
              label={type}
            />
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
          <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></span>
          Category
        </h3>
        <div className="space-y-3">
          {categories.map(cat => (
            <FilterButton
              key={cat}
              active={selectedType === cat}
              onClick={() => setSelectedType(cat)}
              label={cat}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default FilterSection;



