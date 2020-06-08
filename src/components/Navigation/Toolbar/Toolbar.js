import React from 'react';
import Style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
  return (
    <header className={Style.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
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
