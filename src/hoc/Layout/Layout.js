import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Style from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       showSideDrawer :false
    }
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    })
  }
  
  render(props){
    return(
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={Style.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
  
}

export default Layout;
