import React from 'react';
import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {
  const { ingredients } = props;
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
    </Aux>
  );
};

export default OrderSummary;
