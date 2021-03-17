import React, { useState, useEffect } from 'react';
import './Login.scss';

import Email from '../../assets/icons/message.svg';
import Password from '../../assets/icons/lock.svg';
import TogglePassword from '../../assets/icons/view.svg';
import Google from '../../assets/icons/google.svg';
import MEM from '../../assets/icons/mem.png';

import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

import Loader from '../UI/Loader/Loader';
const Login = ({ onAuth, hasError, loading }) => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  useEffect(() => {
    console.log(hasError);
  }, [hasError]);
  const signIn = () => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!email && !password) {
      //   alert('Invalid Email or Password');
      setError('Email or Password must not be empty');
      return;
    } else if (!pattern.test(email) && password.length < 5) {
      setError('Invalid Email or Password');
      return;
    } else if (password.length < 5) {
      setError('Password must have 5 or more characters');
      return;
    } else if (!pattern.test(email)) {
      setError('Invalid Email');
    } else {
      setError(null);
      onAuth(email, password, isSignUp);
    }
  };

  return (
    <div className="login-card">
      <p className="login-card__welcome">
        Sign in to your <span>MedSpecialized</span>
      </p>
      <p className="login-card__system-name">Learning Management System</p>
      <div className="login-card__input">
        <img className="left-image" src={Email} alt="Email" />
        <input
          type="email"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="login-card__input">
        <img className="left-image" src={Password} alt="Password" />
        <input
          type={passwordToggle ? 'input' : 'password'}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <img
          className="right-image"
          src={TogglePassword}
          alt="View Password"
          onClick={() => setPasswordToggle((currValue) => !currValue)}
        />
      </div>
      <p style={{ color: 'red', marginBotton: '25px' }}>
        {hasError ? hasError : error ? error : null}
      </p>
      {loading ? (
        <Loader />
      ) : (
        <button onClick={() => signIn()}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      )}

      <p
        className="login-card__forgot-password"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
      </p>
      <p className="login-card__forgot-password">Forgot your password?</p>
      <hr />
      <div className="login-card__alternate-login">
        <img src={Google} alt="Google" />
        <span>Sign in with Gmail</span>
      </div>
      <div className="login-card__alternate-login">
        <img src={MEM} alt="MEM" />
        <span>Sign in with MEM</span>
      </div>
      <p className='login-card__back-btn'>Back</p>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(action.loginInit(email, password, isSignUp)),
  };
};
const mapStateToProps = (state) => {
  return {
    hasError: state.error,
    loading: state.isLoading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
