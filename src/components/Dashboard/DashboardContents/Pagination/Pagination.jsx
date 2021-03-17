import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pagination.scss';
const Pagination = () => {
  return (
    <div>
      <ul className="pagination">
        <li>&#60;&#60;</li>
        <li>&#60;</li>
        <NavLink to="/users/pages/1">
          <li>1</li>
        </NavLink>
        <NavLink to="/users/pages/2">
          <li>2</li>
        </NavLink>
        <li>&#62;</li>
        <li>&#62;&#62;</li>
      </ul>
      <p className='scope'>Showing 33 out of 33</p>
    </div>
  );
};
export default Pagination;
