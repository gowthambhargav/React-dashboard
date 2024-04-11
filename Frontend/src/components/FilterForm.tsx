import React, { useState } from 'react';

function FilterForm() {
  const [filters, setFilters] = useState({
    sector: '',
    topic: '',
    region: '',
    country: '',
    pestle: '',
    source: '',
  });

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <label>
        Sector:
        <select name="sector" value={filters.sector} onChange={handleChange}>
          <option value="">All</option>
          <option value="Energy">Energy</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Topic:
        <select name="topic" value={filters.topic} onChange={handleChange}>
          <option value="">All</option>
          <option value="gas">Gas</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Region:
        <select name="region" value={filters.region} onChange={handleChange}>
          <option value="">All</option>
          <option value="Northern America">Northern America</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Country:
        <select name="country" value={filters.country} onChange={handleChange}>
          <option value="">All</option>
          <option value="United States of America">United States of America</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Pestle:
        <select name="pestle" value={filters.pestle} onChange={handleChange}>
          <option value="">All</option>
          <option value="Industries">Industries</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Source:
        <select name="source" value={filters.source} onChange={handleChange}>
          <option value="">All</option>
          <option value="EIA">EIA</option>
          {/* Add more options as needed */}
        </select>
      </label>
    </form>
  );
}

export default FilterForm;