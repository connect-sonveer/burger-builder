import React, { Component } from 'react';
import Style from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

export class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
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
        ingredient = <div className={Style.Meat}></div>;
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
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
