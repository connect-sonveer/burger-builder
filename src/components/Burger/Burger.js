import React from 'react';
import Style from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let ingredientsList = Object.keys(props.ingredients)
    .map((ingKeys) => {
      return [...Array(props.ingredients[ingKeys])].map((_, index) => {
        return <BurgerIngredient key={ingKeys + index} type={ingKeys} />;
      });
    })
    .reduce((array, element) => {
      console.log('array', array);
      return array.concat(element);
    }, []);

  //   console.log('ingredientsList', ingredientsList);

  if (ingredientsList.length === 0) {
    ingredientsList = <p>Please start adding ingredients.</p>;
  }

  return (
    <div className={Style.Burger}>
      <BurgerIngredient type="burger-top" />
      {ingredientsList}
      <BurgerIngredient type="burger-bottom" />
    </div>
  );
};

export default Burger;
