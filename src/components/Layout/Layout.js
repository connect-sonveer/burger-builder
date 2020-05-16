import React from 'react';
import Aux from '../../hoc/Aux';
import Layout from './Layout.module.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={Layout.content}>{props.children}</main>
  </Aux>
);

export default layout;
