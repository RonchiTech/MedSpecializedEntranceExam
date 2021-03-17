import React from 'react';
import './Login.scss';
import Email from '../../assets/icons/message.svg';
import Password from '../../assets/icons/lock.svg';
const Login = () => {
  return (
    <div className="login-card">
      <p className="login-card__welcome">
        Sign in to your <span>MedSpecialized</span>
      </p>
      <p className="login-card__system-name">Learning Management System</p>
      <div className="login-card__input">
        <img src={Email} alt="Email" />
        <input type="text" placeholder="Email Address" />
      </div>
      <div className="login-card__input">
        <img src={Password} alt="Password" />
        <input type="password" placeholder="Password" />
      </div>
      <button>Sign In</button>
    </div>
  );
};
export default Login;
