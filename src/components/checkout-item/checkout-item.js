import React from "react";
import { connect } from "react-redux";
import "./checkout-item.scss";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price, id } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="itemImg" className="img" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <i className="fas fa-arrow-left" onClick={() => removeItem(cartItem)}></i>
        <span className="value">{quantity}</span>
        <i className="fas fa-arrow-right" onClick={() => addItem(cartItem)}></i>
      </div>
      <div className="price">{price}$</div>
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => clearItemFromCart(id)}
      >
        <i className="fa fa-trash-o" />
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: id => dispatch(clearItemFromCart(id)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)) 
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
