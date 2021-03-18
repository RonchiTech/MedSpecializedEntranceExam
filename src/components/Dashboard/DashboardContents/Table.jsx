import React, { useEffect } from 'react';
// import users from './users';
import ViewIcon from '../../../assets/icons/view.svg';
import UpdateIcon from '../../../assets/icons/edit.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import Default from '../../../assets/icons/user-default.svg';
import * as action from '../../../store/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Table = ({ onFetchData, users, onDeleteData }) => {
  useEffect(() => {
    onFetchData();
  }, [onFetchData]);

  const onDeleteUser = (user) => {
    onDeleteData(user);
  };
  let results = null;
  if (users) {
    results = Object.keys(users).map((user, index) => {
      return (
        <tr key={index}>
          <td className="email-logo">
            <img src={Default} alt="Default" />
            {users[user].email}
          </td>
          <td>{users[user].name}</td>
          <td>{users[user].status.toUpperCase()}</td>
          <td>{users[user].role.toUpperCase()}</td>
          <td>
            <img src={ViewIcon} alt="view" />
          </td>
          <td>
            <Link to={`/users/update-user/${user}`} >
              <img src={UpdateIcon} alt="View" />
            </Link>
          </td>
          <td>
            <img
              className="delete-user__icon"
              src={TrashIcon}
              alt="Trash"
              onClick={() => onDeleteUser(user)}
            />
          </td>
        </tr>
      );
    });
  }

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
        {results || 'Empty Records'}
      </tbody>
    </table>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: () => dispatch(action.fetchData()),
    onDeleteData: (id) => dispatch(action.deleteData(id)),
  };
};
const mapDispatchStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapDispatchStateToProps, mapDispatchToProps)(Table);
