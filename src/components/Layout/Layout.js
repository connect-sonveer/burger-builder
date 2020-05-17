import React from 'react';
import Aux from '../../hoc/Aux';
import Layout from './Layout.module.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer</div>
    <main className={Layout.Content}>{props.children}</main>
  </Aux>
);

export default layout;
