import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AddUsers.scss';
import { connect } from 'react-redux';
import * as action from '../../../../store/actions/';

const AddUser = ({ onAddUser }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('active');
  const [role, setRole] = useState('admin');
  const history = useHistory();
  const formSubmit = (e) => {
   
    console.log(email, name, status, role);
    onAddUser(email, name, status, role);
    history.replace('/users')
  };

  return (
    <div className="add-user_container">
      <div className="user">
        <h3>Add Users</h3>
        <Link to="/users">
          <button style={{ backgroundColor: '#387fc2' }}>Back to Users</button>
        </Link>
      </div>
      <hr />
      <form className="add-user__form" onSubmit={(e) => formSubmit(e)}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            required
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            className="status"
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label>Role:</label>
          <select
            className="role"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="trainee">Trainee</option>
          </select>
        </div>
        <button>Add User</button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (email, name, status, role) =>
      dispatch(action.addUserInit(email, name, status, role)),
  };
};
export default connect(null, mapDispatchToProps)(AddUser);
