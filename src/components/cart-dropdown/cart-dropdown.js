import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button";
import CartItem from "../cart-item";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.actions";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItems, history, toggleCart }) => {
  const Items = cartItems.length ? (
    cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} cartItem={cartItem} />;
    })
  ) : (
    <span className="empty-message">Your cart is empty</span>
  );
  return (
    <div className="cart-dropdown ">
      <div className="cart-items">{Items}</div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCart();
        }}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
