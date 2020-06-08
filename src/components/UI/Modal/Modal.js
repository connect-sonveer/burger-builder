import React, {Component} from 'react';
import Style from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate(){
    console.log('[Modal] DidUpdate');
  }

  render(){
    const { showModal, handleModalBackdrop, children } = this.props;
    return (
      <Aux>
        <Backdrop showBackdrop={showModal} handleModalBackdrop={handleModalBackdrop} />
        <div
          className={Style.Modal}
          style={{ transform: showModal ? 'translateY(0)' : 'translateY(-100vh)', opacity: showModal ? '1' : 0 }}
        >
          {children}
        </div>
      </Aux>
    );
  }
};

export default Modal;
