import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as action from '../../store/actions';
import './Dashboard.scss';

import DashboardNav from './DashboardNav/DashboardNav';
import DashboardContent from './DashboardContents/DashboardContents';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="dashboard-navigation">
        <DashboardNav />
      </aside>
      <aside className="dashboard-contents">
        <Redirect from="/" to="/users" />
        <Switch>
          <Route path="/users" component={DashboardContent} />
        </Switch>
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
    onLogIn: () => dispatch(action.loginSuccess()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
