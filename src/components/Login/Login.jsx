import React, { useState } from 'react';
import './Login.scss';
import Email from '../../assets/icons/message.svg';
import Password from '../../assets/icons/lock.svg';
import TogglePassword from '../../assets/icons/view.svg';
const Login = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  return (
    <div className="login-card">
      <p className="login-card__welcome">
        Sign in to your <span>MedSpecialized</span>
      </p>
      <p className="login-card__system-name">Learning Management System</p>
      <div className="login-card__input">
        <img className="left-image" src={Email} alt="Email" />
        <input type="text" placeholder="Email Address" />
      </div>
      <div className="login-card__input">
        <img className="left-image" src={Password} alt="Password" />
        <input
          type={passwordToggle ? 'input' : 'password'}
          placeholder="Password"
        />
        <img
          className="right-image"
          src={TogglePassword}
          alt="View Password"
          onClick={() => setPasswordToggle((currValue) => !currValue)}
        />
      </div>
      <button>Sign In</button>
      <p className="login-card__forgot-password">Forgot your password?</p>
      <hr />
    </div>
  );
};
export default Login;
