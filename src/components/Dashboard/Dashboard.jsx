import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as action from '../../store/actions';
import './Dashboard.scss';

import DashboardNav from './DashboardNav/DashboardNav';

const Dashboard = ({ onLogOut }) => {
  const logout = () => {
    onLogOut();
    window.location.reload();
  };
  return (
    <div className="dashboard">
      <aside className="dashboard-navigation">
        <DashboardNav />
      </aside>
      <aside className="dashboard-contents">
        <h2 style={{ color: 'black' }}>
          You are currently logged in{' '}
          <button onClick={() => logout()}>Log out</button>
        </h2>
      </aside>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.localId !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(action.logout()),
    onLogIn: () => dispatch(action.loginSuccess()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
