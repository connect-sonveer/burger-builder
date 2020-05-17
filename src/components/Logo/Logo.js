import React from 'react';
import Style from './Logo.module.css';
import logo from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <div className={Style.Logo}>
      <img src={logo} />
    </div>
  );
};

export default Logo;
