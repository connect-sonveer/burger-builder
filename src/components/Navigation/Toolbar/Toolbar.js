import React from 'react';
import Style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
  return (
    <header className={Style.Toolbar}>
      <div>Menu</div>
      <div className={Style.Logo}>
        <Logo />
      </div>
      <nav className={Style.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
