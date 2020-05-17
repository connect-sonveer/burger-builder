import React from 'react';
import Style from './Modal.module.css';

const Modal = (props) => {
  const { showModal } = props;
  return (
    <div
      className={Style.Modal}
      style={{ transform: showModal ? 'translateY(0)' : 'translateY(-100vh)', opacity: showModal ? '1' : 0 }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
