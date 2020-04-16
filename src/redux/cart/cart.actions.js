export const toggleCart = () => ({
  type: "CART_TOGGLE_HIDDEN"
});

export const addItem = item => ({
  type: "ADD_ITEM",
  payload: item
});

export const removeItem = id => ({
  type: "REMOVE_ITEM",
  payload: id
});

export const clearItemFromCart = id => ({
  type: "CLEAR_ITEM_FROM_CART",
  payload: id
});
