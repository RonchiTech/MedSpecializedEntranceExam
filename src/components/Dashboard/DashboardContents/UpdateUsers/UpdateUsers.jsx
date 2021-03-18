import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as action from '../../../../store/actions/';
const UpdateUsers = ({
  onUpdateUser,
  match: {
    params: { id },
  },
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('active');
  const [role, setRole] = useState('admin');
  const history = useHistory();
  useEffect(() => {
    axios
      .get(
        `https://medspeacialized-default-rtdb.firebaseio.com/users/${id}.json`
      )
      .then((response) => {
        setEmail(response.data.email);
        setName(response.data.name);
        setStatus(response.data.status);
        setRole(response.data.Role);
      });
  }, [id]);
  const formUpdate = (e) => {
    console.log(email, name, status, role);
    onUpdateUser(email, name, status, role, id);
    history.replace('/users');
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
      <form className="add-user__form" onSubmit={(e) => formUpdate(e)}>
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
        <button>Update User</button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (email, name, status, role, id) =>
      dispatch(action.updateUserInit(email, name, status, role, id)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateUsers);
