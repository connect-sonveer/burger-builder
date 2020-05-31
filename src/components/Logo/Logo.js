import React from 'react';
import Style from './Logo.module.css';
import logo from '../../assets/images/logo.png';

const Logo = (props) => {
  return (
    <div className={Style.Logo} style={{ height: props.height }}>
      <img src={logo} />
    </div>
  );
};

export default Logo;
