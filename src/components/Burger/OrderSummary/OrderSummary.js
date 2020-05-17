import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const { ingredients, price } = props;
  const ingredientSummary = Object.keys(ingredients).map((igKeys) => {
    return (
      <li key={igKeys}>
        <span style={{ textTransform: 'capitalize' }}>
          {igKeys}:{ingredients[igKeys]}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <div>Your Order!</div>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price : {price}</strong>
      </p>
      <Button buttonType="Danger">CANCEL</Button>
      <Button buttonType="Success">CONTINUE</Button>
    </Aux>
  );
};

export default OrderSummary;
