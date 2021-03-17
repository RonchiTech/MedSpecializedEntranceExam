import React from 'react';
import './Caption.scss'
import logo from '../../assets/icons/checked-white.svg'
const Caption = () => {
  return (
    <div className='caption'>
      <h3 className="caption_title">Learning Experience. Simplified.</h3>
      <div className="caption_features">
        <div className="caption_feature">
          <img src={logo} alt="check" />
          <span>Easily access stored data.</span>
        </div>
        <div className="caption_feature">
          <img src={logo} alt="check" />
          <span>Customize your learning path.</span>
        </div>
        <div className="caption_feature">
          <img src={logo} alt="check" />
          <span>Manage your courses for users and teams.</span>
        </div>
      </div>
    </div>
  );
};
export default Caption;
