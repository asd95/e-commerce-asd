import { addItem, removeItem, clearItemFromCart } from "./cart.utils.js";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART_TOGGLE_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
