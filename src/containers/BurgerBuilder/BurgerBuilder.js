import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
  salad: 20,
  bacon: 20,
  meat: 60,
  cheese: 40,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 20,
  };

  addIngredientHandler = (type) => {
    const currentIngredient = { ...this.state.ingredients };
    currentIngredient[type] = currentIngredient[type] + 1;
    const currentPrice = this.state.totalPrice;
    this.setState({
      ingredients: currentIngredient,
      totalPrice: currentPrice + INGREDIENT_PRICE[type],
    });
  };

  removeIngredientHandler = (type) => {
    const currentIngredient = { ...this.state.ingredients };
    if (currentIngredient[type] > 0) {
      currentIngredient[type] = currentIngredient[type] - 1;
    }
    this.setState({
      ingredients: currentIngredient,
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
