import React from 'react';

const FilterDropdown: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="col-span-1 md:col-span-1">
          <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">Select Year</option>
            <option>2023</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-1">
          <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">Select Oil</option>
            <option>Oil</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-1">
          <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">Select Sector</option>
            <option>Sector</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-1">
          <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">Select Region</option>
            <option>Region</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-1">
          <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">Select PEST</option>
            <option>PEST</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-1">
          <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">Select Source</option>
            <option>Source</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;