import React from 'react';
import Style from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={Style.BuildControl}>
      <div className={Style.Label}>{props.label}</div>
      <button className={Style.Less}>Add</button>
      <button className={Style.More}>Subtract</button>
    </div>
  );
};

export default BuildControl;
