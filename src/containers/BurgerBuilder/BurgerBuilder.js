import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { INGREDIENT_PRICE } from '../../helpers/Constants';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 20,
    isPurchasable: true,
  };

  handlePurchase = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((keys) => {
        return ingredients[keys];
      })
      .reduce((accumulater, element) => {
        return accumulater + element;
      }, 0);

    this.setState({ isPurchasable: sum <= 0 });
  };

  addIngredientHandler = (type) => {
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = updatedIngredient[type] + 1;
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: this.state.totalPrice + INGREDIENT_PRICE[type],
    });
    this.handlePurchase(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    const updatedIngredient = { ...this.state.ingredients };
    if (updatedIngredient[type] > 0) {
      updatedIngredient[type] = updatedIngredient[type] - 1;
    }
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: this.state.totalPrice - INGREDIENT_PRICE[type],
    });
    this.handlePurchase(updatedIngredient);
  };

  render() {
    const { totalPrice, isPurchasable } = this.state;
    const disabledButtons = {
      ...this.state.ingredients,
    };

    for (let key in disabledButtons) {
      disabledButtons[key] = disabledButtons[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledButtons={disabledButtons}
          price={totalPrice}
          isPurchasable={isPurchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
