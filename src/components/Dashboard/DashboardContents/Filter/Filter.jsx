import React from 'react';

const Filter = () => {
  return (
    <>
      <select className="category" id="category" name="category">
        <option value="Name">Name</option>
      </select>
      <input className="search" placeholder="Search..." />
    </>
  );
};
export default Filter;
