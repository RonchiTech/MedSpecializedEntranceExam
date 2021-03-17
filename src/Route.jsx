import React, { useEffect } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import * as action from './store/actions/';
import { useHistory } from 'react-router-dom';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
const Route = ({ isAuth, onLogIn }) => {
  const history = useHistory(); 
  useEffect(() => {
    onLogIn();
  }, [onLogIn]);

  let display = <Main />;
  if (isAuth) {
    history.push('/users');
    display = <Dashboard />;
  }

  return display;
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

export default connect(mapStateToProps, mapDispatchToProps)(Route);
