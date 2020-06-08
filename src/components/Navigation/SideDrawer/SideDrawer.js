import React from 'react';
import Style from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const SideDrawer = (props) => {
  let attachedClasses = [Style.SideDrawer, Style.Close];
  if(props.open) {
    attachedClasses = [Style.SideDrawer, Style.Open];
  }

  return (
    <Aux>
      <Backdrop showBackdrop={props.open} handleModalBackdrop={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={Style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
