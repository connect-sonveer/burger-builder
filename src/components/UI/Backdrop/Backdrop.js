import React from 'react';
import Style from './Backdrop.module.css';

const Backdrop = (props) => {
  const { showBackdrop, handleModalBackdrop } = props;
  return showBackdrop ? <div className={Style.Backdrop} onClick={handleModalBackdrop}></div> : null;
};

export default Backdrop;
