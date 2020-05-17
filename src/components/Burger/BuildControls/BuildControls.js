import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import Style from './BuildControls.module.css';
import { CONTROLS } from '../../../helpers/Constants';

const BuildControls = (props) => {
  // console.log('BuildControlsProps', props);
  const { price, addIngredient, removeIngredient, disabledButtons, isPurchasable, orderNow } = props;
  return (
    <div className={Style.BuildControls}>
      <p className={Style.Price}>
        Total Price: <strong>{price}</strong>
      </p>
      {CONTROLS.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            addIngredient={() => {
              addIngredient(ctrl.type);
            }}
            removeIngredient={() => {
              removeIngredient(ctrl.type);
            }}
            isDisabled={disabledButtons[ctrl.type]}
          />
        );
      })}
      <p></p>
      <button className={Style.OrderButton} disabled={isPurchasable} onClick={orderNow}>
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
