import React from 'react';
import Style from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  const { showModal, handleModalBackdrop } = props;
  return (
    <Aux>
      <Backdrop showBackdrop={showModal} handleModalBackdrop={handleModalBackdrop} />
      <div
        className={Style.Modal}
        style={{ transform: showModal ? 'translateY(0)' : 'translateY(-100vh)', opacity: showModal ? '1' : 0 }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
