import React from 'react';
import Filter from '../Filter/Filter';
import Table from '../Table';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
const User = () => {
  return (
    <div>
      <div className="user">
        <h3>Users</h3>
        <Link to='/users/add-users'>
          <button>Invite User</button>
        </Link>
      </div>
      <hr />
      <Filter />
      <Table />
      <Pagination />
    </div>
  );
};
export default User;
