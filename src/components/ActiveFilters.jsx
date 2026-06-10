import React from "react";
import { X } from "lucide-react";

const ActiveFilters = ({
  selectedType,
  setSelectedType,
  selectedColor,
  setSelectedColor
}) => {
 const hasActiveFilters = selectedType !== 'All' || selectedColor !== 'All';

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      <span className="text-sm font-semibold text-gray-600">Active Filters:</span>
      {selectedType !== 'All' && (
        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
          Category: {selectedType}
          <button onClick={() => setSelectedType('All')} className="hover:text-pink-900">
            <X className="w-3 h-3" />
          </button>
        </span>
      )}
      {selectedColor !== 'All' && (
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
          Color: {selectedColor}
          <button onClick={() => setSelectedColor('All')} className="hover:text-purple-900">
            <X className="w-3 h-3" />
          </button>
        </span>
      )}
    </div>
  );
};

export default ActiveFilters;



