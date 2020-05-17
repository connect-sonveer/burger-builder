import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import Style from './BuildControls.module.css';

const BuildControls = (props) => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
  ];

  return (
    <div className={Style.BuildControls}>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            addIngredient={() => {
              props.addIngredient(ctrl.type);
            }}
            removeIngredient={() => {
              props.removeIngredient(ctrl.type);
            }}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
