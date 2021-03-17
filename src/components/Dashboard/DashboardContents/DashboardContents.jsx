import React from 'react';
import Table from './Table';
import Pagination from './Pagination/Pagination';
import Filter from './Filter/Filter';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as action from '../../../store/actions/';

import './DashboardContents.scss';

const DashboardContents = ({ onLogOut }) => {
  const history = useHistory();
  const logout = () => {
    onLogOut();
    history.replace('/');
    // window.location.reload();
  };

  return (
    <div className="container">
      <div className="contents">
        <p>Switch to Trainee</p>
        <p>Notification</p>
        <p className="logout" onClick={logout}>
          Logout
        </p>
      </div>
      <div className="user">
        <h3>Users</h3>
        <button>Invite User</button>
      </div>
      <hr />
      <Filter />
      <Table />
      <Pagination />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(action.logout()),
  };
};
export default connect(null, mapDispatchToProps)(DashboardContents);
