import React from 'react';
import Style from './Button.module.css';

const Button = (props) => {
  //   console.log('props', props);
  return <button className={[Style.Button, Style[props.buttonType]].join(' ')}>{props.children}</button>;
};

export default Button;
