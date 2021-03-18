import React from 'react';

const Filter = () => {
  return (
    <>
      <select className="category" id="category" name="category">
        <option value="name">Name</option>
        <option value="Name">Email</option>
        <option value="name">Status</option>
        <option value="Name">Role</option>
      </select>
      <input className="search" placeholder="Search..." />
    </>
  );
};
export default Filter;
