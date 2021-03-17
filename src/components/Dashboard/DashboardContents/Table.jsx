import React from 'react';
import users from './users';
import ViewIcon from '../../../assets/icons/view.svg';
import UpdateIcon from '../../../assets/icons/edit.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import Default from '../../../assets/icons/user-default.svg';
const results = users.map((user) => {
  return (
    <tr key={user.email}>
      <td className="email-logo">
        <img src={Default} alt="Default" />
        {user.email}
      </td>
      <td>{user.name}</td>
      <td>{user.status}</td>
      <td>{user.role}</td>
      <td>
        <img src={ViewIcon} alt="view" />
      </td>
      <td>
        <img src={UpdateIcon} alt="View" />
      </td>
      <td>
        <img src={TrashIcon} alt="Trash" />
      </td>
    </tr>
  );
});
const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th className="email-header">Email</th>
          <th>Name</th>
          <th>Status</th>
          <th>Role</th>
          <th>View</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {results}
      </tbody>
    </table>
  );
};
export default Table;
