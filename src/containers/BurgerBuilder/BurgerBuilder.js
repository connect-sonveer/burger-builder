import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { INGREDIENT_PRICE } from '../../helpers/Constants';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    showModal: false,
    showBackdrop: false,
  };

  handleOrderNow = () => {
    this.setState({ showModal: true, showBackdrop: true });
  };

  handleModalBackdrop = () => {
    this.setState({ showModal: !this.state.showModal, showBackdrop: !this.state.showBackdrop });
  };

  handlePurchase = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKeys) => {
        return ingredients[igKeys];
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
    const { ingredients, totalPrice, isPurchasable, showModal, showBackdrop } = this.state;
    const disabledButtons = {
      ...this.state.ingredients,
    };

    for (let key in disabledButtons) {
      disabledButtons[key] = disabledButtons[key] <= 0;
    }

    return (
      <Aux>
        <Modal showModal={showModal} showBackdrop={showBackdrop} handleModalBackdrop={this.handleModalBackdrop}>
          <OrderSummary ingredients={ingredients} price={totalPrice} />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledButtons={disabledButtons}
          price={totalPrice}
          isPurchasable={isPurchasable}
          orderNow={this.handleOrderNow}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
