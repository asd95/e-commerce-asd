import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../checkout-item";
import StripeCheckoutButton from "../stripe-button/";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  const Items = cartItems.length
    ? cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })
    : null;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {Items}
      <div className="total">TOTAL: {cartTotal}</div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

// const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(CheckoutPage);
