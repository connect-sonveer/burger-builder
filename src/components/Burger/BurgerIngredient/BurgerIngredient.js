import React from 'react';
import Style from './BurgerIngredient.css';

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.types) {
    case 'burger-bottom':
      ingredient = <div className={Style.BreadBottom}></div>;
      break;
    case 'burger-top':
      ingredient = (
        <div className={Style.BreadTop}>
          <div className={Style.Seeds1}></div>
          <div className={Style.Seeds2}></div>
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className={Style.BreadBottom}></div>;
      break;
    case 'cheese':
      ingredient = <div className={Style.Cheese}></div>;
      break;
    case 'salad':
      ingredient = <div className={Style.Salad}></div>;
      break;
    case 'bacon':
      ingredient = <div className={Style.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;
